import { InferSchemaType, Schema, model } from "mongoose";

const byteSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "Creator",
      required: true,
    },
    mediaUrl: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    subcategoryIds: [{ type: Schema.Types.ObjectId, ref: "Subcategory" }],
    tags: { type: [String] },
    forkUrl: { type: String },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    forksCount: { type: Number, default: 0 },
    savesCount: { type: Number, default: 0 },
    reportsCount: { type: Number, default: 0 },
    isSponsored: { type: Boolean, default: false },
    isTrending: { type: Boolean, default: false },
    likedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    topCommentId: { type: Schema.Types.ObjectId, ref: "Comment" },
    watchNextId: { type: Schema.Types.ObjectId, ref: "Byte" },
  },
  { timestamps: true },
);

export type Byte = InferSchemaType<typeof byteSchema>;

const ByteModel = model("Byte", byteSchema);
export default ByteModel;
