import PostModel, { Post } from "./post"; // Replace with the correct import path
import { ObjectId } from "mongoose";

// Create operation
export const createPost = async (postData: Partial<Post>): Promise<Post> => {
  return createPost;
};

// Read operation
export const getPostById = async (postId: ObjectId): Promise<Post | null> => {
 return getPostById;
};

// Update operation
export const updatePost = async (postId: ObjectId, updatedData: Partial<Post>): Promise<Post | null> => {
  return updatePost;
};

// Delete operation
export const deletePost = async (postId: ObjectId): Promise<void> => {
 return deletePost;
};
 