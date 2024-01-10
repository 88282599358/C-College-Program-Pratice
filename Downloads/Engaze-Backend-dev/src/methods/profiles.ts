import ProfileModel, { Profile } from "../models/userProfile";

// GET - retrieve all users
export const getProfiles = () => ProfileModel.find();

// GET - retrieve user's auth document
export const getProfileAuth = (userId: string) => ProfileModel.findById(userId);

// GET - retrieve user by _id
export const getProfileById = (id: string) => ProfileModel.findById(id);

// POST - create a new user
export const createProfile = (values: Profile) =>
  new ProfileModel(values).save().then((user: any) => user.toObject());

// DELETE - delete existing user (protected)
export const deleteProfile = (id: string) =>
  ProfileModel.findOneAndDelete({ _id: id });

// UPDATE - update existing user (protected)
export const updateProfileById = (id: string, values: Partial<Profile>) =>
  ProfileModel.findByIdAndUpdate(id, values);
