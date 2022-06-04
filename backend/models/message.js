const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    
    avatar: {
      type: String,
    },

    content: {
      type: String,
      required: [true, "Please enter a text!"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const message = mongoose.model("message", msgSchema);

module.exports = message;
