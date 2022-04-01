const {
  getList,
  listUser,
  //   getDetail,
  //   createUser,
  //   updateUser,
  //   deleteUser,
} = require("../services/users.services");
const mysql = require("mysql");
const config = require("../config/mysql.config");
let connection = mysql.createConnection(config);
const getUserList = async (req, res) => {

  const users = await getList()
  res.status(200).send(users)
  
};

// const getUserDetail = (req, res) => {
//   const params = req.params;
//   const id = params.id;
//   const user = getDetail(id);
//   if (user) {
//     res.status(200).send(user);
//   } else {
//     res.status(404).send("not found");
//   }
// };

// const createUsers = async (req, res) => {
//   const user = req.body;
//   const newUser = await createUser(user);
//   res.status(201).send(newUser);
// };

// const updateUsers = (req, res) => {
//   const { id } = req.params;
//   const user = req.body;
//   const updatedUser = updateUser(id, user);
//   if (updatedUser) {
//     res.status(200).send(updatedUser);
//   } else {
//     res.status(404).send("not found");
//   }
// };

// const deleteUsers = (req, res) => {
//   const { id } = req.params;
//   const userDelete = deleteUser(id);
//   if (userDelete) {
//     res.status(200).send(userDelete);
//   } else {
//     res.status(404).send("not found");
//   }
// };

module.exports = {
  getUserList,
  //   getUserDetail,
  // createUsers,
  //   updateUsers,
  //   deleteUsers,
};
