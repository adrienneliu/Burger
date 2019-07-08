// database functions 

var orm = require("../config/orm.js");

//call ORM functions using specific input for ORM 
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }
}
module.exports = burger;