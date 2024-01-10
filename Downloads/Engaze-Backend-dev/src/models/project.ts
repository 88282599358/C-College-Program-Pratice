import { InferSchemaType, Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    name: { type: String, required: true },
    about: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    forkUrl: { type: String },
    projectUrl: { type: String, required: true },
    previewImageUrls: [{ type: String }],
    contributorIds: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    viewsCount: { type: Number, required: true },
    forksCount: { type: Number, required: true },
    starsCount: { type: Number, required: true },
    contributorsCount: { type: Number, required: true },
  },
  { timestamps: true },
);

export type Project = InferSchemaType<typeof projectSchema>;

const ProjectModel = model("Project", projectSchema);
export default ProjectModel;
