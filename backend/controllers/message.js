const mongoose = require("mongoose");

const msg = require("../models/message");
const serv0 = require("../db");
exports.createMessage = async (req, res, next) => {
  const { content } = req.body;

  const newMessage = await msg.create({
    content,
    author: req.userExists.username,
    avatar: req.userExists.avatar,
  });
  try {
    await newMessage.save();

    return res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(409).json({ message: "Something went wrong!" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await msg.find({});

    return res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ message: "Could not find messages!" });
  }
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`This post id "${id}" is unavailable.`);

  await msg.findByIdAndRemove(id);

  res.json({ message: "Message deleted successfully." });
};
