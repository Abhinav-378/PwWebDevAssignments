const JWT = require('jsonwebtoken');

const jwtAuth = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided"
        });
    }

    console.log("Token received:", token); // Debugging log

    try {
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = { id: payload.id, email: payload.email };
        next();
    } catch (err) {
        let message = "Invalid token";

        if (err.name === "TokenExpiredError") {
            message = "Token expired";
        } else if (err.name === "JsonWebTokenError") {
            message = "JWT malformed";
        } else if (err.name === "NotBeforeError") {
            message = "JWT not active";
        }

        console.error("JWT Error:", err); // Debugging log

        return res.status(401).json({
            success: false,
            message
        });
    }
};

module.exports = jwtAuth;
