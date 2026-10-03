import { ValidationError, UniqueConstraintError } from "sequelize";

export const errorHandler = (error, req, res, next) => {
    console.error(error);

    if (error instanceof UniqueConstraintError) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    if (error instanceof ValidationError) {
        return res.status(400).json({
            message: error.errors[0].message
        });
    }

    return res.status(500).json({
        message: "Internal server error"
    });
};