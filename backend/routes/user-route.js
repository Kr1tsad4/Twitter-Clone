const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");

router.route("/user").get(getAllUser);
router.route("/user/:id").get(getUserById);
router.route("/user").post(createUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;
