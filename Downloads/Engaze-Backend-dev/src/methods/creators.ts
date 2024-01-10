import CreatorProfileModel, { CreatorProfile } from "../models/creatorProfile";

// GET - retrieve all users
export const getCreators = () => CreatorProfileModel.find();

// GET - retrieve user's auth document
export const getCreatorAuth = (userId: string) =>
  CreatorProfileModel.findById(userId);

// GET - retrieve user by _id
export const getCreatorById = (id: string) => CreatorProfileModel.findById(id);

// POST - create a new user
export const createCreator = (values: CreatorProfile) =>
  new CreatorProfileModel(values).save().then((user: any) => user.toObject());

// DELETE - delete existing user (protected)
export const deleteCreator = (id: string) =>
  CreatorProfileModel.findOneAndDelete({ _id: id });

// UPDATE - update existing user (protected)
export const updateCreatorById = (
  id: string,
  values: Partial<CreatorProfile>,
) => CreatorProfileModel.findByIdAndUpdate(id, values);
