//mysql 

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root", 
    password: "password", 
    database: "burgers_db"
});


//connecting to mysql 
connection.connect(function(err){
    if (err){
        console.log("error connecting: " + err.stack);
        return; 
    }
    console.log("connected as id: " + connection.threadId);
});

//export connection to ORM 
module.exports = connection; 