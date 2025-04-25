const { Workout,User } = require('../models');
//model importer 

module.exports = {
  //homepage controller method 
  async homepage(req,res) {
    //fetch all workouts for logged in user
    const workouts = await Workout.findAll({ include:User });
    res.render('home', { workouts: workouts.map(w => w.get({ plain:true })), loggedIn: req.session.loggedIn });
  },
  //dashboard 
  async dashboard(req,res) {
    //kick user out if they aren't logged in
    if (!req.session.user_id) return res.redirect('/');
    //workouts for the user that is logged in
    const workouts =await Workout.findAll({
      where: { user_id: req.session.user_id }
    });
    //create the dashboard with the user's workouts 
    res.render('dashboard', {
      workouts: workouts.map(w=> w.get({ plain: true })),
      loggedIn: true
    });
  }
};
