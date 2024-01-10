import { AuthRequestBody } from "../types/validators";
import UserAuthModel, { UserAuth } from "../models/userAuth";

// GET - retrieve specific auth document by email (unique)
export const getUserAuthByEmail = (email: string) =>
  UserAuthModel.findOne({ email });

// GET - retrieve specific auth document by username (unique)
export const getUserAuthByUsername = (username: string) =>
  UserAuthModel.findOne({ username });

// GET - retrieve auth document by session token (auth)
export const getUserAuthBySessionToken = (sessionToken: string) =>
  UserAuthModel.findOne({
    "authentication.sessionToken": sessionToken,
  });

// GET - retrieve auth document by _id
export const getUserAuthById = (id: string) => UserAuthModel.findById(id);

// POST - create a new auth document
export const createUser = (
  values: Omit<AuthRequestBody, "password"> & {
    authentication: any;
  },
) => new UserAuthModel(values).save();

// DELETE - delete existing auth document (protected)
export const deleteUserAuth = (id: string) =>
  UserAuthModel.findOneAndDelete({ _id: id });

// UPDATE - update existing auth document (protected)
export const updateUserAuthById = (id: string, values: Partial<UserAuth>) =>
  UserAuthModel.findByIdAndUpdate(id, values);
