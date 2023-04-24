require("dotenv").config();
const mysql = require("mysql2/promise");

// CONFIG 
const database = mysql.createPool({
  host : process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// DATABASE CONNECTION
// NOT MANDATORY ==> QUERY ==> CONNECTION AUTO
database.getConnection()
  .then(() => {
    console.log("Can reach database")
  }).catch((err) => {
    console.error(err)
});

database.query("select * from movies")
  .then(([movies]) =>{
    console.log(movies);
  }).catch((err) => {
    console.error(err);
});

module.exports = database;