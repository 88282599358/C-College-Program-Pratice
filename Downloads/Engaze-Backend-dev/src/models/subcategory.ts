import { InferSchemaType, Schema, model } from "mongoose";

const subcategorySchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    theme: { type: String, required: true },
  },
  { timestamps: true },
);

export type Subcategory = InferSchemaType<typeof subcategorySchema>;

const SubcategoryModel = model("Subcategory", subcategorySchema);
export default SubcategoryModel;
