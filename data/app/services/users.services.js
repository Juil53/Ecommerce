// const { Users } = require("../models/index");
const mysql = require("mysql");
const config = require("../config/mysql.config");
let connection = mysql.createConnection(config);
const getList = async () => {
  let sql = "SELECT * FROM user";
  return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
          if (err) {
              return reject(err);
          }
          resolve(result);
      });
  });
};
// const listUser = getList();
// console.log("listUser",listUser)
// const getDetail = (id) => {
//   const index = userList.findIndex((user) => {
//     return user.id === id;
//   });
//   if (index !== -1) {
//     const user = userList[index];
//     return user;
//   } else {
//     return false;
//   }
// };

// const createUser = async (user) => {
//   const newUser = await Users.create(user);
//   return newUser;
// };

// const updateUser = (id, user) => {
//   const index = userList.findIndex((user) => {
//     return user.id === id;
//   });
//   if (index !== -1) {
//     const oldUser = userList[index];
//     const updateUser = { ...oldUser, user };
//     userList[index] = updateUser;
//     return updateUser;
//   } else {
//     return false;
//   }
// };

// const deleteUser = (id) => {
//   const index = userList.findIndex((user) => {
//     return user.id === id;
//   });
//   if (index !== -1) {
//     const user = userList[index];
//     userList.splice(index, 1);
//     return user;
//   } else {
//     return false;
//   }
// };

module.exports = {
  getList,

  //   getDetail,
  //   createUser,
  //   updateUser,
  //   deleteUser,
};
