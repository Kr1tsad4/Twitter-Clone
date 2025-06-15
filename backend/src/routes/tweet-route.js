const express = require("express");
const router = express.Router();
const {
  getAllTweet,
  getTweetById,
  createTweet,
  editTweet,
  deleteTweet,
} = require("../controllers/tweet-controller");

router.route("/").get(getAllTweet);
router.route("/:id").get(getTweetById);
router.route("/").post(createTweet);
router.route("/:id").put(editTweet);
router.route("/:id").delete(deleteTweet);

module.exports = router;
