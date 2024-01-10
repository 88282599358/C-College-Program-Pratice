import { NextFunction, Request, Response } from "express";
import { Profile } from "../models/userProfile";
import { UserAuth } from "../models/userAuth";

type Intercept = {
  userId: string;
  profile: Profile;
  auth: UserAuth;
  io?: Promise<any>;
};

export interface I_Request extends Request {
  intercept: Intercept;
}

export type ControllerType = (
  req: I_Request,
  res: Response,
  next: NextFunction,
) => Promise<void | Response<any, Record<string, any>>>;
