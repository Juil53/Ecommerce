"use strict";
const express = require("express");
const router = require("./routers/users.rootRouter");
const mysql = require("mysql");
const config = require("./config/mysql.config");
const app = express();
// chuyen Resquest ve JSON
app.use(express.json());
app.use(router);
//Run port 3000
app.listen(3000, () => {
  console.log("Node server running localhost:3000");
});

// setup mysql connect DB
let connection = mysql.createConnection(config);
connection.connect((error) => {
  if (error) throw error;
  console.log("connected Database");
  //CREATE USER TABLE
  let sql = `CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    full_name VARCHAR(255), 
    email VARCHAR(255),
    password VARCHAR(255),
    user_role VARCHAR(255))
    `;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// setup sequelize connect DB
// const { sequelize } = require("./models/index");
// sequelize.sync({ alter: true });