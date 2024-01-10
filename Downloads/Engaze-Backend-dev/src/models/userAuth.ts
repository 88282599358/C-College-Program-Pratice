import { InferSchemaType, Schema, model } from "mongoose";

const userAuthSchema = new Schema(
  {
    username: {
      type: String,
      min: 6,
      max: 7,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    fcmToken: {
      type: String,
    },
    authentication: {
      salt: { type: String, required: true },
      password: { type: String, required: true },
      sessionToken: { type: String, unique: true },
    },
    accessLevel: {type: String, enum: ["admin", "user"], default: "user"},
    profileId: { type: Schema.Types.ObjectId, ref: "Profile" },
    creatorId: { type: Schema.Types.ObjectId, ref: "Creator" },
  },
  { timestamps: true },
);

export type UserAuth = InferSchemaType<typeof userAuthSchema>;

const UserAuthModel = model("UserAuth", userAuthSchema);
export default UserAuthModel;
