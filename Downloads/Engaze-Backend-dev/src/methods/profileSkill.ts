import UserSkillModel, { UserSkill } from "../models/userSkill";
import { I_Request } from "../types/http";

export const getAllSkillDetails = () => UserSkillModel.find();

// @ts-ignore

export const getSkillDetailById = (req: I_Request) =>
  UserSkillModel.findById(req.intercept.profile.skillId);

// @ts-ignore
export const updateSkillDetailById = (req: I_Request) =>
  UserSkillModel.findByIdAndUpdate(req.intercept.profile.skillId);

// @ts-ignore
export const deleteSkillDetailById = (req: I_Request) =>
  UserSkillModel.findByIdAndDelete(req.intercept.profile.skillId);

// @ts-ignore
export const postNewSkillDetail = (values: UserSkill) => {
  new UserSkillModel(values).save().then((profile: any) => profile.toObject());
};
