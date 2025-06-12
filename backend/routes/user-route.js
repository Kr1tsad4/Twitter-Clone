const express = require("express");
const router = express.Router();

const { getAllUser, createUser } = require("../controllers/user-controller");

router.route("/user").get(getAllUser);
router.route("/user").post(createUser);

module.exports = router;
