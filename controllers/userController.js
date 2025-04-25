const { User } = require('../models');
//import 'user' model

//registers a new user 
module.exports = {
  async register(req,res) {
    try {
      await User.create(req.body);
      res.redirect('/login');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //logs in an existing user 
  async login(req,res) {
    //location via username, if no user is found or pw is incorrect return that credentials are invalid
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !user.checkPassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    //save data from session
    req.session.save(()=> {
      req.session.user_id = user.id;
      req.session.loggedIn = true;
      res.redirect('/dashboard');
    });
  },
  //logout user, get rid of session data
  logout(req,res) {
    req.session.destroy(()=> {
      res.redirect('/');
    });
  }
};
