const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const post = require("../models/post");
const { protect } = require("../middleware/auth");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("uploading");
    callback(null, "../frontend/public/uploads/");
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() + "..." + file.originalname);
  },
});

const uploads = multer({ storage: storage });

const { getPosts, getPost, deletePost } = require("../controllers/post");

const router = express.Router();

router.route("/getPosts").get(getPosts);
router.route("/getPost/:id").get(getPost);
router.route("/deletePost/:id").delete(protect, deletePost);
router.post(
  "/createPost",
  protect,
  uploads.single("orderFile"),
  async (req, res) => {
    console.log(req.file, "wk;gth;yj");
    const {
      academicLevel,
      paperType,
      subjectArea,
      title,
      paperInst,
      paperFormat,
      file,
      noPages,
      spacing,
      noSources,
      duration,
      multiple,
    } = req.body;
    console.log(req.body);
    const newPost = await post.create({
      academicLevel,
      paperType,
      subjectArea,
      title,
      paperInst,
      paperFormat,
      file: req.file.originalname,
      noPages,
      spacing,
      noSources,
      duration,
      multiple,
      author: req.userExists.username,
    });
    try {
      await newPost.save();

      return res.status(201).json({ success: true, data: newPost });
    } catch (error) {
      res.status(409).json({ message: "Something went wrong!" });
    }
  }
);

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Post is not found please!");

  const updatedPost = {
    status,
    _id: id,
  };

  await post.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

module.exports = router;
