import { InferSchemaType, Schema, model } from "mongoose";

const userSkillSchema = new Schema(
  {
    profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    topSkills: [{ type: String }],
    technicalSkills: [{ type: String }],
    softSkills: [{ type: String }],
    otherSkills: [{ type: String }],
  },
  { timestamps: true },
);

export type UserSkill = InferSchemaType<typeof userSkillSchema>;

const UserSkillModel = model("UserSkill", userSkillSchema);
export default UserSkillModel;
