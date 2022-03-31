const express = require("express");
const userRoute = express.Router();
const {
  getUserList,
  getUserDetail,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/users.controller");

userRoute.get("/users", getUserList);

//Lay san pham chi tiet
userRoute.get("/users/:id", getUserDetail);

//Them san pham
userRoute.post("/users", createUsers);

//Cap nhat san pham
userRoute.put("/users/:id", updateUsers);

//Xoa san pham
userRoute.delete("/users/:id", deleteUsers);

module.exports = userRoute;
