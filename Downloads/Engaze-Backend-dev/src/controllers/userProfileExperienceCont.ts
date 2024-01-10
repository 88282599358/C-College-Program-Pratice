import express from "express";
import {
  getAllExperienceDetails,
  getExperienceDetailById,
  updateExperienceDetailById,
  deleteExperienceDetailById,
  postNewExperienceDetail,
} from "../methods/profileExperience";
import { Request, Response } from "express";
import TryCatch from "../helpers/tryCatch";
import { CommonErrors } from "../errors/commonErrors";
import { CustomError } from "../errors/customError";
import { NotFoundErrors } from "../errors/notFoundErrors";
import mongoose from "mongoose";
import { I_Request } from "../types/http";

export const handleNewExperienceDetailsPosting = TryCatch(
  async (req: express.Request<{}, {}>, res, next) => {
    const {
      title,
      companyName,
      location,
      startDate,
      endDate,
      isCurrent,
      aboutCompany,
      aboutRole,
    } = req.body;
    if (
      !title ||
      !companyName ||
      !location ||
      !startDate ||
      !endDate ||
      !isCurrent ||
      !aboutCompany ||
      !aboutRole
    ) {
      return next(new CustomError(CommonErrors.INCOMPLETE_REQUEST_BODY, 400));
    }
    const newObjectAdd = postNewExperienceDetail({
      title,
      companyName,
      location,
      startDate,
      endDate,
      isCurrent,
      aboutCompany,
      aboutRole,
      createdAt: new Date(),
      updatedAt: new Date(),
      profileId: new mongoose.Types.ObjectId(),
    });
    console.log(newObjectAdd);
    return res
      .status(201)
      .json({ success: true, message: "Experience details added successfully" })
      .end();
  },
);

export const handleGetExperienceDetailsById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { experienceId } = req.params;

    if (!experienceId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const fetchData = await getExperienceDetailById(req);
      return res
        .status(200)
        .json({ message: "Successfully fetched the object", data: fetchData });
    }
  },
);

export const handleUpdateExperienceDetailsById = TryCatch(
  async (req, res, next) => {
    const { experienceId } = req.params;

    if (!experienceId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const updatedObject = await updateExperienceDetailById(req);
      console.log(updatedObject);
      return res.json({
        message: "Successfully updated the experience details",
        status: 201,
        data: updatedObject,
      });
    }
  },
);

export const handleDeleteExperienceDetailsById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { experienceId } = req.params;

    if (!experienceId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const deletedObject = await deleteExperienceDetailById(req);
      console.log(deletedObject);
      return res.json({ message: "Successfully deleted the skill details" });
    }
  },
);

export const handleFetchAllExperienceDetailsAdmin = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const objectFetching = await getAllExperienceDetails();
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
