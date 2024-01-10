import mongoose, { Document, InferSchemaType, Schema, model } from "mongoose";

export type TokenPurposeType = "login" | "emailVerification" | "recovery";

const tokenSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAuth",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      enum: ["login", "emailVerification", "recovery"],
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      expires: "15m",
    },
  },
  { timestamps: true },
);

export type Token = InferSchemaType<typeof tokenSchema>;

const TokenModel = model("Token", tokenSchema);
export default TokenModel;
