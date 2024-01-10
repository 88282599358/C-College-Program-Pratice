import { InferSchemaType, Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    text: { type: String, required: true },
    documentId: {
      type: Schema.Types.ObjectId,
      ref: "referenceDocument",
      required: true,
    },
    referenceDocument: { type: String, enum: ["Byte", "Post"] },
    replyTo: { type: Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: true },
);

export type Comment = InferSchemaType<typeof commentSchema>;

const CommentModel = model("Comment", commentSchema);
export default CommentModel;
