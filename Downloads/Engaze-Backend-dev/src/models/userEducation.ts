import { InferSchemaType, Schema, model } from "mongoose";

const userEducationSchema = new Schema(
  {
    profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    universityName: { type: String, required: true },
    degreeName: { type: String, required: true },
    specialization: { type: String },
    gpa: { type: Number, required: true },
    duration: { type: Number, required: true },
    startedAt: { type: Date, required: true },
    completedAt: { type: Date },
    isPursuing: { type: Boolean },
    location: { type: String, required: true },
    description: { type: String },
    aboutEducation: [String],
  },
  { timestamps: true },
);

export type UserEducation = InferSchemaType<typeof userEducationSchema>;

const UserEducationModel = model("UserEducation", userEducationSchema);
export default UserEducationModel;
