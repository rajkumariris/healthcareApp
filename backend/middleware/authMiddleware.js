const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {

    const token = req.header("authorization");
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid token");
        }
        req.user = user;
        next();
    });
}