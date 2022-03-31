// const { Users } = require("../models/index");
// let userList = [
//   {
//     id: 1,
//     fullName: "Hoang Phan",
//     email: "hoangphan@gmail.com",
//     password: "1234",
//   },
//   {
//     id: 2,
//     fullName: "Thuy Le",
//     email: "thuyle@gmail.com",
//     password: "1234",
//   },
// ];

const mysql = require("mysql");
const config = require("../config/mysql.config");
let connection = mysql.createConnection(config);
const getList = async () => {
  let sql = "SELECT * FROM user";
  await connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    return result;
  });
};

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
