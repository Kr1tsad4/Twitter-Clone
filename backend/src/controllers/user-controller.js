const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const userService = require("../services/user-service");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const getAllUser = asyncHandler(async (req, res) => {
  const users = await userService.findAll();
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }
  const user = await userService.findById(id);
  res.status(200).json(user);
});

const createUser = asyncHandler(async (req, res) => {
  const newUser = await userService.create(req.body);
  res.status(201).json(newUser);
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }

  await userService.update(id, req.body);
  res.status(200).json({ message: "User information updated successfully." });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(404).json({ message: `User not found with id ${id}.` });
  }
 
  return res.status(200).json({ message: "User deleted successfully." });
});

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
