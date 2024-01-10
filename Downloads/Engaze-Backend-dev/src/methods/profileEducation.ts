import UserEducationModel, { UserEducation } from "../models/userEducation";
import { I_Request } from "../types/http";

export const postNewEducationDetails = (values: UserEducation) => {
  new UserEducationModel(values).save().then((user: any) => user.toObject());
};

export const getAllEducationDetails = () => UserEducationModel.find();

// @ts-ignore
export const getEducationDetailsById = (req: I_Request) =>
  UserEducationModel.findById(req.intercept.profile.educationIds);
// @ts-ignore
export const updateEducationDetailsById = (req: I_Request) =>
  UserEducationModel.findByIdAndUpdate(req.intercept.profile.educationIds);
// @ts-ignore
export const deleteEducationDetailsById = (req: I_Request) =>
  UserEducationModel.findByIdAndDelete(req.intercept.profile.educationIds);
