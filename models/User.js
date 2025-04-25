const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');
//import bcrypt for pw hashing

//check pw validity with bcrypt
class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password,this.password);
  }
}

//initialize the user model
User.init(
  {
    id: { type: DataTypes.INTEGER,autoIncrement:true, primaryKey:true },
    username: { type: DataTypes.STRING,allowNull: false, unique: true },
    password: { type: DataTypes.STRING,allowNull: false },
  },
  {
    //hashes pw before it goes to the database 
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      },
    },
    sequelize,
    modelName: 'user',
  }
);
//export model elsewhere
module.exports = User;
