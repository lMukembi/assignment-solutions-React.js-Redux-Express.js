const express = require("express");

const { searchPost } = require("../controllers/search");

const router = express.Router();

router.route("/searchPost").get(searchPost);

module.exports = router;
