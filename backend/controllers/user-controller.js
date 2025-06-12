const user = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const getAllUser = asyncHandler(async (req, res) => {
  const users = await user.find();
  res.status(200).json(users);
});

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await user.create({ name, email, password: hashPassword });
  const userObj = newUser.toObject();
  delete userObj.password;
  delete userObj.__v;
  res.status(201).json(userObj);
});

module.exports = { getAllUser, createUser };
