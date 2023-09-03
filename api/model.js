import mongoose from "mongoose";

const { Schema, model } = mongoose;

const MemoSchema = new Schema(
  {
    texts: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "create_time",
      updatedAt: "update_time",
    },
  },
);

const MemoModel = model("Memo", MemoSchema);

export default MemoModel;
