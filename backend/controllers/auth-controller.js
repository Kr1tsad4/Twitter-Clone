const User = require("../models/user");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const loginHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter email and password." });
  }

  const user = await User.findOne({ email }).select("+password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const userObj = user.toObject();
  delete userObj._id;
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
