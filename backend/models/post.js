const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },

    file: {
      type: String,
    },

    academicLevel: {
      type: String,
      trim: true,
    },

    paperType: {
      type: String,
      trim: true,
    },

    subjectArea: {
      type: String,
      trim: true,
    },

    title: {
      type: String,
      trim: true,
    },

    paperInst: {
      type: String,
      trim: true,
    },

    paperFormat: {
      type: String,
      trim: true,
    },

    noPages: {
      type: Number,
    },

    spacing: {
      type: String,
    },

    noSources: {
      type: Number,
    },

    duration: {
      type: String,
    },

    multiple: {
      type: String,
    },

    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const post = mongoose.model("post", postSchema);

module.exports = post;
