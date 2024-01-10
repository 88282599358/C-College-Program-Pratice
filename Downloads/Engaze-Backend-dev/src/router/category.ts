import {
    getAllCategoriesController,
    getCategoryByIdController,
    createCategoryController,
    deleteCategoryController,
    updateCategoryByIdController
} from "../controllers/category";

import isAuthenticated from "../middlewares/auth";
import isAdmin from "../middlewares/admin";

export default (router: any) => {
    router.get("/categories/", getAllCategoriesController);
    router.get("/categories/:id", getCategoryByIdController);
    router.post("/categories/", isAuthenticated, createCategoryController);
    router.delete("/categories/:id", isAuthenticated, deleteCategoryController);
    router.patch("/categories/:id", updateCategoryByIdController);
}