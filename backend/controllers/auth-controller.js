const User = require("../models/user");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const loginHandler = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!password || (!email && !name)) {
    return res
      .status(400)
      .json({ message: "Please enter email and password." });
  }

  const user = email
    ? await User.findOne({ email }).select("+password")
    : await User.findOne({ name }).select("+password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.createdAt;
  delete userObj.updatedAt;
  delete userObj.__v;

  res.status(200).json({
    message: "Login successfully",
    user: userObj,
  });
});

module.exports = { loginHandler };
