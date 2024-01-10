import CategoryModel, { Category } from "../models/category";

export const getAllCategories = async () => {
  const categories = await CategoryModel.find();
  return categories;
};

export const getCategoryById = async (id: string) => {
  const category = await CategoryModel.findById(id);
  return category;
};

export const createCategory = async (values: Category) => {
  const category = await new CategoryModel(values).save();
  return category;
};

export const deleteCategory = async (id: string) => {
  const category = await CategoryModel.findByIdAndDelete(id);
  return category;
};

export const updateCategoryById = async (id: string, values: Partial<Category>) => {
  const category = await CategoryModel.findByIdAndUpdate(id, values);
  return category;
};


