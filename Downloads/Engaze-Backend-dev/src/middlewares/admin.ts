import { Request, Response, NextFunction } from 'express';
import { CustomError } from "../errors/customError";
import { CommonErrors } from "../errors/commonErrors";
import { I_Request } from '../types/http';

const isAdmin = (req: I_Request, res: Response, next: NextFunction) => {
  
    const userAuth = req.intercept.auth;
  
    if (!userAuth || userAuth.accessLevel !== 'admin') {
      return next(new CustomError(CommonErrors.FORBIDDEN, 403));
    }
  
    next();
  };

export default isAdmin;