const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//import sequelize utilities

class Workout extends Model {}
//define and initialize workout model

Workout.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull:false },
    description: { type: DataTypes.TEXT },
    date: { type: DataTypes.DATEONLY, allowNull:false },
    user_id: { type: DataTypes.INTEGER, allowNull:false },
  },
  {
    sequelize,
    modelName: 'workout',
  }
);
//export the model 
module.exports = Workout;
