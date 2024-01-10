import {
  handleNewSkillPosting,
  handleGetSkillById,
  handleUpdateSkillById,
  handleDeleteSkillById,
  handleFetchAllSkillDetailsAdmin,
} from "../controllers/userProfileSkillCont";
import isAuthenticated from "../middlewares/auth";

export default (router: any) => {
  router.post("/auth/postSkill", isAuthenticated, handleNewSkillPosting);
  router.put("/auth/updateSkill", isAuthenticated, handleUpdateSkillById);
  router.get("/auth/getSkill", isAuthenticated, handleGetSkillById);
  router.delete("/auth/deleteSkill", isAuthenticated, handleDeleteSkillById);
};
