var express = require('express'); 

var router = express.Router(); 

//Import model to use database functions 
var burger = require("../models/burger.js");


//Setting up routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res){
    burger.insertOne([
        "burger_name"
    ], [ req.body.burger_name
    ], function(result) {
        res.redirect('/');
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id; 

    console.log("condition is ", condition); 

    burger.updateOne({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    })
})
module.exports = router;