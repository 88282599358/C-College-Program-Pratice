import express, { Request } from "express";

import { 
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory,
    updateCategoryById,
 } from "../methods/category";
import TryCatch from "../helpers/tryCatch";
import { CommonErrors } from "../errors/commonErrors";
import { CustomError } from "../errors/customError";
import { I_Request } from "../types/http";


export const getAllCategoriesController = TryCatch(
    async (req: I_Request, res, next) => {
        const categories = await getAllCategories();
        res.status(200).json(categories);
    }
    );

export const getCategoryByIdController = TryCatch(
    async (req: I_Request, res, next) => {
        const { id } = req.params;
        if (!id) {
            return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR,400)) ;        
        }
        const category = await getCategoryById(id);
        res.status(200).json(category);
    }
    );

export const createCategoryController = TryCatch(
    async (req: I_Request, res, next) => {
        const { name, description, bannerImageUrl, iconImageUrl } = req.body;
        if (!name || !description) {
            return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR,400)) ;        
        }

        const category = await createCategory({ 
            name, 
            description,
            bannerImageUrl: bannerImageUrl || "",
            iconImageUrl: iconImageUrl || "",
            createdAt: new Date(),
            updatedAt: new Date(),
         });
        res.status(200).json(category);
    }
);

export const deleteCategoryController = TryCatch(
    async (req: I_Request, res, next) => {
        const { id } = req.params;
        if (!id) {
            return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR,400)) ;        
        }
        const category = await deleteCategory(id);
        res.status(200).json(category);
    }
);

export const updateCategoryByIdController = TryCatch(
    async (req: I_Request, res, next) => {
        const { id } = req.params;
        if (!id) {
            return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR,400)) ;        
        }
        const { name, description, bannerImageUrl, iconImageUrl } = req.body;
        const category = await updateCategoryById(id, { 
            name, 
            description,
            bannerImageUrl: bannerImageUrl || "",
            iconImageUrl: iconImageUrl || "",
            updatedAt: new Date(),
         });
        res.status(200).json(category);
    }
);
