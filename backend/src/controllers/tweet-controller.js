const tweetService = require("../services/tweet-service");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const getAllTweet = asyncHandler(async (req, res) => {
  const tweets = await tweetService.findAll();
  return res.status(200).json(tweets);
});

const getTweetById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(404).json({ message: `Tweet not found with id ${id}.` });
  }
  const tweet = await tweetService.findById(id);
  return res.status(200).json(tweet);
});

const createTweet = asyncHandler(async (req, res) => {
  const newTweet = await tweetService.create(req.body);
  return res.status(201).json(newTweet);
});

const editTweet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(404).json({ message: `Tweet not found with id ${id}.` });
  }
  const content = req.body.content;
  const editedTweet = await tweetService.edit(id, content);
  return res.status(200).json(editedTweet);
});

const deleteTweet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(404).json({ message: `Tweet not found with id ${id}.` });
  }
  await tweetService.deleteTweet(id);
  return res.status(200).json({ message: "Tweet deleted successfully." });
});

const likeTweet = asyncHandler(async (req, res) => {
  const tweetId = req.params.id;
  const { userId } = req.body;
  if (!isValidObjectId(userId)) {
    return res
      .status(404)
      .json({ message: `User not found with id ${userId}.` });
  }
  if (!isValidObjectId(tweetId)) {
    return res
      .status(404)
      .json({ message: `Tweet not found with id ${tweetId}.` });
  }
  const likedTweet = await tweetService.like(tweetId, userId);
  return res.status(200).json(likedTweet);
});

const unlikeTweet = asyncHandler(async (req, res) => {
  const tweetId = req.params.id;
  const { userId } = req.body;
  if (!isValidObjectId(userId)) {
    return res
      .status(404)
      .json({ message: `User not found with id ${userId}.` });
  }
  if (!isValidObjectId(tweetId)) {
    return res
      .status(404)
      .json({ message: `Tweet not found with id ${tweetId}.` });
  }
  const unLikedTweet = await tweetService.unlike(tweetId, userId);
  return res.status(200).json(unLikedTweet);
});

const commentTweet = asyncHandler(async (req, res) => {
  const tweetId = req.params.id;
  const { userId, content } = req.body;
  if (!isValidObjectId(userId)) {
    return res
      .status(404)
      .json({ message: `User not found with id ${userId}.` });
  }
  if (!isValidObjectId(tweetId)) {
    return res
      .status(404)
      .json({ message: `Tweet not found with id ${tweetId}.` });
  }
  const commentedTweet = await tweetService.comment(tweetId, userId, content);
  return res.status(200).json(commentedTweet);
});
module.exports = {
  getAllTweet,
  getTweetById,
  createTweet,
  editTweet,
  deleteTweet,
  likeTweet,
  unlikeTweet,
  commentTweet,
};
