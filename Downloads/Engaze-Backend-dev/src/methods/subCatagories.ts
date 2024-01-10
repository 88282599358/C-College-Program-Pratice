import SubcategoryModel, { Subcategory } from "../models/subcategory";

export const getAllSubcategories = async () => {
  const subcategories = await SubcategoryModel.find();
  return subcategories;
};

export const getSubcategoryById = async (id: string) => {
  const subcategory = await SubcategoryModel.findById(id);
  return subcategory;
};

export const createSubcategory = async (values: Subcategory) => {
  const subcategory = await new SubcategoryModel(values).save();
  return subcategory;
};

export const deleteSubcategory = async (id: string) => {
  const subcategory = await SubcategoryModel.findByIdAndDelete(id);
  return subcategory;
};

