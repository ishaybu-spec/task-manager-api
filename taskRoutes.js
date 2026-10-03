import express from "express";
import {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} from "../controllers/taskController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { validateTask, validateTaskUpdate } from "../middlewares/validationMiddleware.js";
const router = express.Router();

router.post("/", authenticate, validateTask, createTask);
router.get("/", authenticate, getTasks);
router.get("/:id", authenticate, getTaskById);
router.put("/:id", authenticate, validateTaskUpdate, updateTask);
router.delete("/:id", authenticate, deleteTask);

export default router;