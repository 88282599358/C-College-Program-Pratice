import { InferSchemaType, Schema, model } from "mongoose";

const userDetailSchema = new Schema({
  profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
  networkingImageUrl: { type: String },
  profileUrl: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String },
  audioUrl: { type: String },
  videoUrl: { type: String },
  aboutMe: { type: String },
});

export type UserDetail = InferSchemaType<typeof userDetailSchema>;

const UserDetailModel = model("UserDetail", userDetailSchema);
export default UserDetailModel;
