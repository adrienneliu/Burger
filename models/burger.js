// database functions 

var orm = require("../config/orm.js");

//call ORM functions using specific input for ORM 
var burger = {
    //show all burgers in mysql
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    //insert data entry for burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    }, 
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
}
module.exports = burger;