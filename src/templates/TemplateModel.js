import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    },
    collection: "Template"
  }
);

export default mongoose.model("Template", Schema);
