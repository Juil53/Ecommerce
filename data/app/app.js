const express = require("express");
const router = require("./routers/users.rootRouter");
const app = express();
// chuyen Resquest ve JSON
app.use(express.json());

// const mysql = require("mysql");

app.use(router);
//Run port 3000
app.listen(3000, () => {
  console.log("Node server running localhost:3000");
});

//setup sequelize connect DB
const { sequelize } = require("./models/index");
sequelize.sync({ alter: true });
