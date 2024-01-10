import express from "express";
import {
  getAllSkillDetails,
  getSkillDetailById,
  postNewSkillDetail,
  updateSkillDetailById,
  deleteSkillDetailById,
} from "../methods/profileSkill";
import { Response } from "express";
import TryCatch from "../helpers/tryCatch";
import { CommonErrors } from "../errors/commonErrors";
import { CustomError } from "../errors/customError";
import { NotFoundErrors } from "../errors/notFoundErrors";
import mongoose from "mongoose";
import { I_Request } from "../types/http";

export const handleNewSkillPosting = TryCatch(
  async (req: express.Request<{}, {}>, res, next) => {
    const { topSkills, technicalSkills, softSkills, otherSkills } = req.body;
    if (!topSkills || !technicalSkills || !softSkills || !otherSkills) {
      return next(new CustomError(CommonErrors.INCOMPLETE_REQUEST_BODY, 400));
    }
    const newObjectAdd = postNewSkillDetail({
      topSkills,
      technicalSkills,
      softSkills,
      otherSkills,
      createdAt: new Date(),
      updatedAt: new Date(),
      profileId: new mongoose.Types.ObjectId(),
    });
    console.log(newObjectAdd);
    return res
      .status(201)
      .json({ success: true, message: "Skill details added successfully" })
      .end();
  },
);

export const handleGetSkillById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { skillId } = req.params;

    if (!skillId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const fetchData = await getSkillDetailById(req);
      return res
        .status(200)
        .json({ message: "Successfully fetched the object", data: fetchData });
    }
  },
);

export const handleUpdateSkillById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { skillId } = req.params;

    if (!skillId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const updatedObject = await updateSkillDetailById(req);
      console.log(updatedObject);
      return res.json({
        message: "Successfully updated the skill details",
        status: 201,
        data: updatedObject,
      });
    }
  },
);

export const handleDeleteSkillById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { skillId } = req.params;

    if (!skillId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const deletedObject = await deleteSkillDetailById(req);
      console.log(deletedObject);
      return res.json({ message: "Successfully deleted the skill details" });
    }
  },
);

export const handleFetchAllSkillDetailsAdmin = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const objectFetching = await getAllSkillDetails();
    if (!objectFetching) {
      return next(new CustomError(NotFoundErrors.USER, 404));
    } else {
      console.log(objectFetching);
      return res.json({
        message: "Successfully fetched all details",
        status: 200,
      });
    }
  },
);
