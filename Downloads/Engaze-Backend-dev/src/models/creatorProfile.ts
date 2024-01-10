import { InferSchemaType, Schema, model } from "mongoose";

const creatorProfileSchema = new Schema(
  {
    profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    byteIds: [{ type: Schema.Types.ObjectId, ref: "Byte" }],
    playlistIds: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
    companyIds: [{ type: Schema.Types.ObjectId, ref: "Company" }],
  },
  { timestamps: true },
);

export type CreatorProfile = InferSchemaType<typeof creatorProfileSchema>;

const CreatorProfileModel = model("Creator", creatorProfileSchema);
export default CreatorProfileModel;
