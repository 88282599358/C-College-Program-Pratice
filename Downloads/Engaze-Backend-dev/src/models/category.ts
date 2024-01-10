import { InferSchemaType, Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    bannerImageUrl: { type: String },
    iconImageUrl: { type: String },
  },
  { timestamps: true },
);

export type Category = InferSchemaType<typeof categorySchema>;

const CategoryModel = model("Category", categorySchema);
export default CategoryModel;
