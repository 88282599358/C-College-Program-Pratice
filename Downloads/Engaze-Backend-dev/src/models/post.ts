import { InferSchemaType, Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "Creator",
      required: true,
    },
    caption: { type: String, required: true },
    mediaUrls: [{ type: String }],
    viewsCount: { type: Number, default: 0 },
    savesCount: { type: Number, default: 0 },
    sharesCount: { type: Number, default: 0 },
    reportsCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    topCommentId: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true },
);

export type Post = InferSchemaType<typeof postSchema>;

const PostModel = model("Post", postSchema);
export default PostModel;
