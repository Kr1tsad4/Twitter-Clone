const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find().select("-__v");
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }
  const userObj = getUser.toObject();
  delete userObj.__v;
  res.status(200).json(userObj);
});

const createUser = asyncHandler(async (req, res) => {
  const { name, email, dob, password } = req.body;
  const existingEmail = await User.findOne({ email: email });
  if (!name || !email || !dob || !password) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }
  const isEmailValid = email.includes("@");
  if (!isEmailValid) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  if (existingEmail) {
    return res.status(400).json({ message: "This email has been used." });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    dob,
    password: hashPassword,
  });
  const userObj = newUser.toObject();
  delete userObj.password;
  delete userObj.__v;
  res.status(201).json(userObj);
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }

  const existingUser = await User.findById(req.params.id).select("+password");

  if (!existingUser) {
    return res.status(404).json({ message: "User not found." });
  }

  const { name, email, dob, password, newPassword } = req.body;
  const existingEmail = await User.findOne({ email: email });

  const updateData = {};
  if (name) updateData.name = name;

  const isEmailValid = email.includes("@");
  if (!isEmailValid) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  if (email && existingUser.email !== email) {
    if (existingEmail) {
      return res.status(400).json({ message: "This email has been used." });
    }
    updateData.email = email;
  }
  if (dob) updateData.dob = dob;

  if (password && newPassword) {
    const isSamePassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isSamePassword) {
      return res
        .status(400)
        .json({ message: "Current password is incorrect." });
    }

    const isNewSameAsOld = await bcrypt.compare(
      newPassword,
      existingUser.password
    );
    if (isNewSameAsOld) {
      return res.status(400).json({
        message: "New password must be different from the current password.",
      });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    updateData.password = hashedNewPassword;
  }

  await User.updateOne({ _id: existingUser._id }, updateData);
  res.status(200).json({ message: "User information updated successfully." });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }
  const existingUser = User.findById(id);

  if (!existingUser) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }
  await User.deleteOne(existingUser);
  return res.status(200).json({ message: "User has been deleted." });
});

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
