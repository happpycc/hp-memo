import express from "express";
import {
  getMemos,
  getMemo,
  deleteAllMemos,
  updateMemo,
  addMemo,
  deleteMemo,
} from "./controller.js";

const router = express.Router();

router.route("/memos").delete(deleteAllMemos);
router.route("/memos/:num").get(getMemos);
router.route("/memo/:id").get(getMemo).put(updateMemo).delete(deleteMemo);
router.route("/memo").post(addMemo);

export default router;
