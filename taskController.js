import { Task } from "../models/index.js";

export const createTask = async (req, res, next) => {
    try {
        const { title, description, status, dueDate } = req.body;

        const task = await Task.create({
            title,
            description,
            status,
            dueDate,
            userId: req.user.id
        });

        return res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (error) {
        next(error);
    }
};

export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.findAll({
            where: {
                userId: req.user.id
            }
        });

        return res.status(200).json({
            tasks
        });

    } catch (error) {
        next(error);
    }
};

export const getTaskById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findOne({
            where: {
                id,
                userId: req.user.id
            }
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json({
            task
        });

    } catch (error) {
        next(error);
    }
};

export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, status, dueDate } = req.body;

        const task = await Task.findOne({
            where: {
                id,
                userId: req.user.id
            }
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        await task.update({
            title,
            description,
            status,
            dueDate
        });

        return res.status(200).json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {
        next(error);
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findOne({
            where: {
                id,
                userId: req.user.id
            }
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        await task.destroy();

        return res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};