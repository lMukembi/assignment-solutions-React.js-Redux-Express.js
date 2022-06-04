const express = require("express");

const {
  getMessages,
  createMessage,
  deleteMessage
} = require("../controllers/message");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/getMessages").get(getMessages);
router.route("/createMessage").post(protect, createMessage);
router.route("/deleteMessage/:id").delete(protect, deleteMessage);

module.exports = router;
