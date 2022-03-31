const { DataTypes } = require("sequelize");
const createUsersModel = (sequelize) => {
  //create Data table
  return sequelize.define(
    "Users",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );
};

module.exports = {
  createUsersModel,
};
