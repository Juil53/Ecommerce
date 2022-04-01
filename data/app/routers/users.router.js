const express = require("express");
const mysql = require("mysql");
const config = require("../config/mysql.config");
// const app = express();
const userRoute = express.Router();
const {
  getUserList,
  // getUserDetail,
  // createUsers,
  // updateUsers,
  // deleteUsers,
} = require("../controllers/users.controller");

let connection = mysql.createConnection(config);
//Lấy tất cả người dùng
userRoute.get("/users", getUserList);

//Lay chi tiet người dùng
// userRoute.get("/users/:id", (req, res) => {
//   const params = req.params;
//   const id = params.id;
// });

// Them nguoi dung
userRoute.post("/users", (req, res) => {
  let newUser = req.body;
  connection.query("INSERT INTO user SET ?", newUser, (error, data) => {
    if (error) throw error;
    res.send(newUser);
  });
});

//Cap nhat san pham
// userRoute.put("/users/:id", updateUsers);

//Xoa san pham
// userRoute.delete("/users/:id", deleteUsers);

module.exports = userRoute;
