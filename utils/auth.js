module.exports = (req, res,next)=> {
  //prevention of unauthorized access
    if (!req.session.loggedIn) {
      return res.redirect('/');
    }
    //if user is authenticated, got to next route
    next();
  };
  