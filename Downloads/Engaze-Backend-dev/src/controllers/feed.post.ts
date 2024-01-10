import PostModel, { Post } from "./post"; // Replace with the correct import path
import { ObjectId } from "mongoose";

// Create operation
export const createPost = async (postData: Partial<Post>): Promise<Post> => {
  try {
    const newPost: Post = await PostModel.create(postData);
    return newPost;
  } catch (error) {
    throw new Error(`Error creating post: ${error.message}`);
  }
};

// Read operation
export const getPostById = async (postId: ObjectId): Promise<Post | null> => {
  try {
    const post: Post | null = await PostModel.findById(postId).exec();
    return post;
  } catch (error) {
    throw new Error(`Error getting post by ID: ${error.message}`);
  }
};

// Update operation
export const updatePost = async (postId: ObjectId, updatedData: Partial<Post>): Promise<Post | null> => {
  try {
    const updatedPost: Post | null = await PostModel.findByIdAndUpdate(postId, updatedData, { new: true }).exec();
    return updatedPost;
  } catch (error) {
    throw new Error(`Error updating post: ${error.message}`);
  }
};

// Delete operation
export const deletePost = async (postId: ObjectId): Promise<void> => {
  try {
    await PostModel.findByIdAndDelete(postId).exec();
  } catch (error) {
    throw new Error(`Error deleting post: ${error.message}`);
  }
};
 