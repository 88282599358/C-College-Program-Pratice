import { InferSchemaType, Schema, model } from "mongoose";

const userExperienceSchema = new Schema(
  {
    profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    isCurrent: { type: Boolean },
    aboutCompany: { type: String },
    aboutRole: [String],
  },
  { timestamps: true },
);

export type UserExperience = InferSchemaType<typeof userExperienceSchema>;

const UserExperienceModel = model("UserExperience", userExperienceSchema);
export default UserExperienceModel;
