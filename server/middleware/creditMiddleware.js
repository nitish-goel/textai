// middleware/creditMiddleware.js
export const checkCredits = (req, res, next) => {
    if (req.user.credits <= 0) {
        return res.status(403).json({ message: "No credits left" });
    }
    next();
};