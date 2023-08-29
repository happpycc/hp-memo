import express from "express";
import {
  getAllMemos,
  getMemo,
  deleteAllMemos,
  updateMemo,
  addMemo,
} from "./controller.js";

const router = express.Router();

router.route("/memos").get(getAllMemos).delete(deleteAllMemos);
router.route("/memo/:id").get(getMemo).put(updateMemo);
router.route("/memo").post(addMemo);

export default router;
