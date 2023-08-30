import express from "express";
import {
  getAllMemos,
  getMemo,
  deleteAllMemos,
  updateMemo,
  addMemo,
  deleteMemo,
} from "./controller.js";

const router = express.Router();

router.route("/memos").get(getAllMemos).delete(deleteAllMemos);
router.route("/memo/:id").get(getMemo).put(updateMemo).delete(deleteMemo);
router.route("/memo").post(addMemo);

export default router;
