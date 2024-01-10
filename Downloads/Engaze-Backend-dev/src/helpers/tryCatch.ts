import { NextFunction, Response } from "express";
import { ControllerType, I_Request } from "../types/http";

const TryCatch =
  (controllerFunc: ControllerType) =>
  (req: I_Request, res: Response, next: NextFunction) => {
    return Promise.resolve(controllerFunc(req, res, next)).catch(next);
  };

export default TryCatch;
