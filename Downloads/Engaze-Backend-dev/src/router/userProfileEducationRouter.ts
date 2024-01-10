import {
  handleNewEducationPosting,
  handleGetEducationDetailsById,
  handleUpdateEducationDetailsById,
  handleDeleteEducationDetailsById,
  handleFetchAllEducationDetailsAdmin,
} from "../controllers/userProfileEducationCont";
import isAuthenticated from "../middlewares/auth";

export default (router: any) => {
  router.post(
    "/auth/postEducation",
    isAuthenticated,
    handleNewEducationPosting,
  );
  router.put(
    "/auth/updateEducation",
    isAuthenticated,
    handleUpdateEducationDetailsById,
  );
  router.get(
    "/auth/getEducation",
    isAuthenticated,
    handleGetEducationDetailsById,
  );
  router.delete(
    "/auth/deleteEducation",
    isAuthenticated,
    handleDeleteEducationDetailsById,
  );
};
