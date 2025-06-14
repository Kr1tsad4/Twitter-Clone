const express = require("express");
const userRouter = require("./routes/user-route");
const authRouter = require("./routes/auth-route");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/twitter-clone-lite/user", userRouter);
app.use("/api/v1/twitter-clone-lite/login", authRouter);
app.use(errorHandler);

module.exports = app