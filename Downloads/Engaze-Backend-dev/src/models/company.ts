import { InferSchemaType, Schema, model } from "mongoose";

const companySchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "Creator",
      required: true,
    },
    name: { type: String, required: true },
    about: { type: String, required: true },
    services: [{ type: String, required: true }],
    companyImageUrl: { type: String, required: true },
    coverImageUrl: { type: String },
    location: { type: String, required: true },
    employeeIds: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    postIds: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    projectIds: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  },
  { timestamps: true },
);

export type Company = InferSchemaType<typeof companySchema>;

const CompanyModel = model("Company", companySchema);
export default CompanyModel;
