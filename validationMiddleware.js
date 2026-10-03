export const validateTask = (req, res, next) => {
    const { title, status } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    if (status && !["pending", "completed"].includes(status)) {
        return res.status(400).json({
            message: "Status must be pending or completed"
        });
    }

    next();
};

export const validateTaskUpdate = (req, res, next) => {
    const { title, status } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    if (!status || !["pending", "completed"].includes(status)) {
        return res.status(400).json({
            message: "Status must be pending or completed"
        });
    }

    next();
};

export const validateRegister = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    if (!email || email.trim() === "") {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Invalid email"
        });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters"
        });
    }

    next();
};

export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || email.trim() === "") {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    if (!password || password.trim() === "") {
        return res.status(400).json({
            message: "Password is required"
        });
    }

    next();
};