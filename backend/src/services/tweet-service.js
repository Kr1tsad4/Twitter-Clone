const Tweet = require("../models/tweet");
const createError = require("http-errors");

const findAll = async () => {
  return await Tweet.find().select("-__v");
};

const findById = async (id) => {
  const existingTweet = await Tweet.findById(id);
  if (!existingTweet) {
    throw createError(404, "Tweet not found.");
  }
  return existingTweet;
};

const create = async (tweet) => {
  const { content, authorId, likes } = tweet;
  const newTweet = await Tweet.create({
    content,
    authorId,
    likes,
  });
  const tweetObj = newTweet.toObject();
  delete tweetObj.__v;
  return newTweet;
};

const edit = async (id, newContent) => {
  const tweetToEdit = await Tweet.findById(id);
  if (!tweetToEdit) {
    throw createError(404, "Tweet not found.");
  }
  tweetToEdit.content = newContent;
  const editedTweet = await tweetToEdit.save();
  return editedTweet;
};

const deleteTweet = async (id) => {
  const existingTweet = await Tweet.findById(id);
  if (!existingTweet) {
    throw createError(404, "Tweet not found.");
  }
  const deletedTweet = await Tweet.deleteMany(existingTweet)
  return deletedTweet
};
module.exports = { findAll, findById, create, edit,deleteTweet };
