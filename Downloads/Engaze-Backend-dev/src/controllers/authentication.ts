import express, { Request } from "express";

import { authenticationFunc, random } from "../helpers/auth";
import {
  createUser,
  getUserAuthByEmail,
  getUserAuthByUsername,
  updateUserAuthById,
} from "../methods/auth";
import { AuthRequestBody } from "../types/validators";
import TryCatch from "../helpers/tryCatch";
import { CustomError } from "../errors/customError";
import { CommonErrors } from "../errors/commonErrors";
import sendMail from "../middlewares/nodemailer";
import { generateUniqueUUID } from "../helpers/token";
import { createToken, getToken } from "../methods/tokens";
import { NotFoundErrors } from "../errors/notFoundErrors";
import { getProfileById } from "../methods/profiles";
import { getCreatorById } from "../methods/creators";

export const register = TryCatch(
  async (req: express.Request<{}, {}, AuthRequestBody>, res, next) => {
    const { username, email, password, fcmToken } = req.body;
    if (!username || !email || !password) {
      return next(new CustomError(CommonErrors.INCOMPLETE_REQUEST_BODY, 400));
    }

    const existingUser = await getUserAuthByEmail(email);

    if (existingUser) {
      return next(new CustomError(CommonErrors.USER_EXISTS, 400));
    }

    const salt = random();
    const user = await createUser({
      username,
      email,
      fcmToken,
      authentication: {
        salt,
        password: authenticationFunc(salt, password),
      },
    });

    const userId = user._id.toString();

    user.authentication!.sessionToken = authenticationFunc(salt, userId);

    const token = generateUniqueUUID();

    await createToken({
      userId: user._id,
      email,
      token,
      purpose: "emailVerification",
    });

    // await sendMail(
    //   email,
    //   "Welcome, Onboard!",
    //   token,
    //   "This is an system generated email. Please cease from replying to it. NO_REPLY_EMAIL",
    //   "welcome",
    // );

    // @ts-expect-error :: user._doc is nested in there, TypeScript doesn't recognize that
    const { authentication, ...others } = user._doc;

    return res
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        data: others,
      })
      .end();
  },
);

export const verifyEmail = TryCatch(
  async (
    req: Request<{}, {}, { verificationToken: string; email: string }>,
    res,
    next,
  ) => {
    const { email, verificationToken } = req.body;

    const tokenExists = await getToken({ email, purpose: "emailVerification" });

    if (!tokenExists) return next(new CustomError(NotFoundErrors.OTP, 404));

    if (tokenExists.token !== verificationToken)
      return next(new CustomError(CommonErrors.INVALID_OTP, 400));

    const accountExists = await getUserAuthByEmail(email);

    if (!accountExists) return next(new CustomError(NotFoundErrors.USER, 404));

    accountExists.isEmailVerified = true;

    await accountExists.save();

    return res
      .status(200)
      .json({ success: true, message: "Email verification successful" })
      .end();
  },
);

export const login = TryCatch(
  async (
    req: Request<
      {},
      {},
      { username?: string; email?: string; password: string }
    >,
    res,
    next,
  ) => {
    const { username, email, password } = req.body;
    if ((!username && !email) || (username && email) || !password) {
      return next(new CustomError(CommonErrors.INCOMPLETE_REQUEST_BODY, 400));
    }
    let existingUser;
    if (username) {
      existingUser = await getUserAuthByUsername(username).select(
        "+authentication.salt +authentication.password",
      );
    }

    if (email) {
      existingUser = await getUserAuthByEmail(email).select(
        "+authentication.salt +authentication.password",
      );
    }

    if (!existingUser)
      return next(new CustomError(CommonErrors.INVALID_CRED, 400));

    const hashedPass = authenticationFunc(
      existingUser.authentication!.salt,
      password,
    );

    if (hashedPass !== existingUser.authentication!.password)
      return next(new CustomError(CommonErrors.INVALID_CRED, 400));

    let response: any = {
      username: existingUser.username,
    };
    if (existingUser.profileId) {
      response.profile = await getProfileById(
        existingUser.profileId.toString(),
      );
    }

    if (existingUser.creatorId) {
      response.creator = await getCreatorById(
        existingUser.creatorId.toString(),
      );
    }

    const salt = random();
    const userId = existingUser._id.toString();
    existingUser.authentication!.sessionToken = authenticationFunc(
      salt,
      userId,
    );

    await existingUser.save();

    res.cookie("sessionToken", existingUser.authentication!.sessionToken, {
      domain: "localhost",
    });

    return res
      .status(200)
      .json({ message: "Login successful", data: response })
      .end();
  },
);

export const logout = TryCatch(async (req, res, next) => {
  const updatedUser = await updateUserAuthById(req.intercept.userId, {
    fcmToken: null,
  });

  res
    .status(200)
    .json({ success: true, message: "Logout successful", data: updatedUser });
});
