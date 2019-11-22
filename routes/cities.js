const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");

const City = require("../models/City");

// @route    GET api/cities
// @desc     Get all cities
// @access   Public

router.get("/", async (req, res) => {
  // res.send("Work for you");
  try {
    const cities = await City.find().sort({date: -1});
    res.json(cities);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error in cities routes GET');
  }
});

// @route    POST api/cities
// @desc     Create a City
// @access   Public
router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("field_latitude", "Please add field_latitude")
      .not()
      .isEmpty(),
    check("field_longitude", "Please add field_longitude")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    // res.send(req.body);
    // res.send("POSTTTTT Work for you");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, field_latitude, field_longitude } = req.body;
    try {
      let city = new City({
        name,
        field_latitude,
        field_longitude
      });

      await city.save();

      res.status(201).send("City created");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
