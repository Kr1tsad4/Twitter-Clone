const express = require("express");
const router = express.Router();
const {
  getAllTweet,
  getTweetById,
  getTweetByUserId,
  createTweet,
  editTweet,
  deleteTweet,
  likeTweet,
  unlikeTweet,
  commentTweet
} = require("../controllers/tweet-controller");

router.route("/").get(getAllTweet);
router.route("/:id").get(getTweetById);
router.route("/user/:id").get(getTweetByUserId);
router.route("/").post(createTweet);
router.route("/:id").put(editTweet);
router.route("/like/:id").put(likeTweet);
router.route("/unlike/:id").put(unlikeTweet);
router.route("/comment/:id").put(commentTweet);
router.route("/:id").delete(deleteTweet);

module.exports = router;
