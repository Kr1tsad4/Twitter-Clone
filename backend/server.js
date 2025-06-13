const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./connection/db-connection");
const userRouter = require("./routes/user-route"); 
const authRouter = require("./routes/auth-route")
const cors = require("cors");

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/twitter-clone-lite/user",userRouter);
app.use("/api/v1/twitter-clone-lite/login", authRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
