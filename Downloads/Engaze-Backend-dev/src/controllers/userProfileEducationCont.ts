import express from "express";
import {
  getEducationDetailsById,
  updateEducationDetailsById,
  deleteEducationDetailsById,
  postNewEducationDetails,
  getAllEducationDetails,
} from "../methods/profileEducation";
import { Request, Response } from "express";
import TryCatch from "../helpers/tryCatch";
import { CommonErrors } from "../errors/commonErrors";
import { CustomError } from "../errors/customError";
import { NotFoundErrors } from "../errors/notFoundErrors";
import mongoose from "mongoose";
import { I_Request } from "../types/http";

export const handleNewEducationPosting = TryCatch(
  async (req: express.Request<{}, {}>, res, next: any) => {
    const {
      universityName,
      degreeName,
      specialization,
      gpa,
      duration,
      startedAt,
      completedAt,
      isPursuing,
      location,
      description,
      aboutEducation,
    } = req.body;
    if (
      !universityName ||
      !degreeName ||
      !specialization ||
      !gpa ||
      !duration ||
      !startedAt ||
      !completedAt ||
      !isPursuing ||
      !location ||
      !description ||
      !aboutEducation
    ) {
      return next(new CustomError(CommonErrors.INCOMPLETE_REQUEST_BODY, 400));
    }
    const newObjectAdd = postNewEducationDetails({
      universityName,
      degreeName,
      specialization,
      gpa,
      duration,
      startedAt,
      completedAt,
      isPursuing,
      location,
      description,
      aboutEducation,
      createdAt: new Date(),
      updatedAt: new Date(),
      profileId: new mongoose.Types.ObjectId(),
    });
    console.log(newObjectAdd);
    return res
      .status(201)
      .json({ success: true, message: "Education details posted successfully" })
      .end();
  },
);

export const handleGetEducationDetailsById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { educationId } = req.params;

    if (!educationId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const fetchData = await getEducationDetailsById(req);
      return res.status(200).json({
        message: "Successfully fetched the education details",
        data: fetchData,
      });
    }
  },
);

export const handleUpdateEducationDetailsById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { educationId } = req.params;

    if (!educationId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const updatedObject = await updateEducationDetailsById(req);
      console.log(updatedObject);
      return res.json({
        message: "Successfully updated the education details",
        status: 201,
        data: updatedObject,
      });
    }
  },
);

export const handleDeleteEducationDetailsById = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const { educationId } = req.params;

    if (!educationId) {
      return next(new CustomError(CommonErrors.REQUEST_BODY_ERROR, 400));
    } else {
      const deletedObject = await deleteEducationDetailsById(req);
      console.log(deletedObject);
      return res.json({
        message: "Successfully deleted the education details",
      });
    }
  },
);

export const handleFetchAllEducationDetailsAdmin = TryCatch(
  async (req: I_Request, res: Response, next: any) => {
    const objectFetching = await getAllEducationDetails();
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
