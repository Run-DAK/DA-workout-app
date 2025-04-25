const User = require('./User');
const Workout = require('./Workout');
//import user and workout models
User.hasMany(Workout, { foreignKey: 'user_id', onDelete: 'CASCADE' });
//user -> many workouts 
Workout.belongsTo(User, {foreignKey: 'user_id'});
//workout -> one user 
module.exports = { User, Workout};
//all models are a single object
