const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");

const Branch = require("../models/Branch");

// @route    GET api/cities
// @desc     Get all cities
// @access   Public

router.get("/", (req, res) => {
  res.send("Branch Work for you");
});



module.exports = router;
