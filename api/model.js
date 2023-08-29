import mongoose from "mongoose";

const { Schema, model } = mongoose;

const MemoSchema = new Schema({
  update_time: {
    type: Number,
    default: () => Date.now(),
  },
  create_time: {
    type: Number,
    default: () => Date.now(),
  },
  texts: { type: String, require: true },
});

const MemoModel = model("Memo", MemoSchema);

export default MemoModel;
