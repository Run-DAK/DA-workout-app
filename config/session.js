const session = require('express-session');
//import session for handlers
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./connection');
//store sessions in database and configure the instance 

module.exports = session({
  //export session middleware 
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
});
