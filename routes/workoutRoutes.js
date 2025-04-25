const express = require('express');
const router = express.Router();
const { Workout } = require('../models');

//create a new workout for logged in individual 
router.post('/', async (req, res)=> {
  if (!req.session.loggedIn) return res.status(403).end();
  try {
    //session recognized via user_id 
    const workout = await Workout.create({ ...req.body,user_id: req.session.user_id });
    res.json(workout);
  } catch (err) {
    res.status(500).json(err);
  }
});

//workout updated vid ID 
router.put('/:id', async (req,res) => {
  const updated = await Workout.update(req.body,{ where: { id: req.params.id } });
  res.json(updated);
});

//delete a workout via ID 
router.delete('/:id',async (req,res)=> {
  await Workout.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});
//exports workout routes 
module.exports = router;
