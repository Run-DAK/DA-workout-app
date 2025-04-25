const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const withAuth = require('../utils/auth');
router.get('/', homeController.homepage);
router.get('/dashboard', withAuth, homeController.dashboard);
router.get('/register', (req, res) => res.render('register'));
router.use('/', userRoutes);
router.use('/workouts', withAuth, workoutRoutes);
//exports all previously defined routes
module.exports = router;
