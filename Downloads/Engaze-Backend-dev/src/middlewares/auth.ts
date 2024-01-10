import { CommonErrors } from "../errors/commonErrors";
import { CustomError } from "../errors/customError";
import TryCatch from "../helpers/tryCatch";
import { getProfileById } from "../methods/profiles";
import { getUserAuthBySessionToken } from "../methods/auth";

import { merge } from "lodash";

const isAuthenticated = TryCatch(async (req, res, next) => {
  const sessionToken = req.cookies["sessionToken"];

  if (!sessionToken) return next(new CustomError(CommonErrors.FORBIDDEN, 403));

  const existingUser = await getUserAuthBySessionToken(sessionToken);

  if (!existingUser) return next(new CustomError(CommonErrors.FORBIDDEN, 403));

  if (!existingUser.profileId)
    return next(new CustomError(CommonErrors.FORBIDDEN, 403));

  const userProfile = await getProfileById(existingUser.profileId.toString());
  merge(req, {
    intercept: { profile: userProfile, userId: existingUser._id.toString() },
  });

  return next();
});

export default isAuthenticated;
