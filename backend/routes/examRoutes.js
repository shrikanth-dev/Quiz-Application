import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getExamQuestions, submitExam } from "../controllers/examController.js";

const router = express.Router();

router.get("/questions", authMiddleware, getExamQuestions);

router.post("/submit", authMiddleware, submitExam);

export default router;
