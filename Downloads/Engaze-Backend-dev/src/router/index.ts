import express from "express";

import authentication from "./authentication";
import userProfileSkill from "./userProfileSkillRouter";
import userProfileEducationRouter from "./userProfileEducationRouter";
import category from "./category";
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  userProfileSkill(router);
  userProfileEducationRouter(router);

  category(router);
  return router;
};
