import UserExperienceModel, { UserExperience } from "../models/userExperience";
import { I_Request } from "../types/http";

export const getAllExperienceDetails = () => UserExperienceModel.find();

// @ts-ignore
export const getExperienceDetailById = (req: I_Request) =>
  UserExperienceModel.findById(req.intercept.profile.experienceIds);

// @ts-ignore
export const updateExperienceDetailById = (req: I_Request) =>
  UserExperienceModel.findByIdAndUpdate(req.intercept.profile.experienceIds);

// @ts-ignore
export const deleteExperienceDetailById = (req: I_Request) =>
  UserExperienceModel.findByIdAndDelete(req.intercept.profile.experienceIds);

// @ts-ignore
export const postNewExperienceDetail = (values: UserExperience) => {
  new UserExperienceModel(values)
    .save()
    .then((profile: any) => profile.toObject());
};
