import mongoose, { Schema, InferSchemaType } from "mongoose";

const profileSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "UserAuth", required: true },
    resumeUrl: { type: String },
    basicDetailsId: {
      type: Schema.Types.ObjectId,
      ref: "UserDetail",
      required: true,
    },
    skillId: { type: Schema.Types.ObjectId, ref: "UserSkill" },
    connectionId: {
      type: Schema.Types.ObjectId,
      ref: "Connection",
      required: true,
    },
    experienceIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "UserExperience",
      },
    ],
    educationIds: [{ type: Schema.Types.ObjectId, ref: "UserEducation" }],
  },
  { timestamps: true },
);

export type Profile = InferSchemaType<typeof profileSchema>;

const ProfileModel = mongoose.model("Profile", profileSchema);
export default ProfileModel;
