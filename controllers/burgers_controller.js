const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

//Create Router file
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      const burgers = {
        burgers: data
      };
      console.log(burgers);
      res.render("index", burgers);
    });
  });

//export file
module.exports = router;