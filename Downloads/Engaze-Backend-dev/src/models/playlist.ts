import { InferSchemaType, Schema, model } from "mongoose";

const playlistSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "Creator",
      required: true,
    },
    bytesCount: { type: Number, default: 0 },
    viewsCount: { type: Number, default: 0 },
    forksCount: { type: Number, default: 0 },
    savesCount: { type: Number, default: 0 },
    sharesCount: { type: Number, default: 0 },
    reportsCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    followersCount: { type: Number, default: 0 },
    thumbnailImageUrl: { type: String },
    coverImageUrl: { type: String },
    byteIds: { type: Schema.Types.ObjectId, ref: "Byte" },
    topByteId: { type: Schema.Types.ObjectId, ref: "Byte" },
    followerIds: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    subcategoryIds: [{ type: Schema.Types.ObjectId, ref: "Subcategory" }],
  },
  { timestamps: true },
);

export type Playlist = InferSchemaType<typeof playlistSchema>;

const PlaylistModel = model("Playlist", playlistSchema);
export default PlaylistModel;
