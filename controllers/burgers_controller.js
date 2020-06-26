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

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId }); 
    })
})

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(data) {
    if (data.changedRows == 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    } 
    })
})

//export file
module.exports = router;