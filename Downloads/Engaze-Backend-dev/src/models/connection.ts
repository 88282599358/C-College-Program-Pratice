import { InferSchemaType, Schema, model } from "mongoose";

const connectionSchema = new Schema({
  documentId: {
    type: Schema.Types.ObjectId,
    ref: "documentReference",
    required: true,
  },
  documentReference: {
    type: String,
    enum: ["Profile", "Company"],
    required: true,
  },
  followerIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  followingIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  requests: {
    received: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    sent: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  },
});

export type Connection = InferSchemaType<typeof connectionSchema>;

const ConnectionModel = model("Connection", connectionSchema);
export default ConnectionModel;
