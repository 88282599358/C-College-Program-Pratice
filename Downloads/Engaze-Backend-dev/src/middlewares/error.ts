import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/customError";

const ErrorHandlerMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  err.message ||= "Internal server error";
  err.statusCode ||= 500;

  return res
    .status(err.statusCode)
    .json({ success: false, error: err.message });
};

export default ErrorHandlerMiddleware;
