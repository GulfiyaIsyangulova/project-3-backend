const express = require('express');
const router  = express.Router();
const Gym = require('../models/Gym');

/* GET home page */
router.get('/', (req, res, next) => {

    const gymsName = req.body.username;
    const address= req.body.password;
  

  // this route is actualy localhost:3000/api/projects 
//  because of the preface i put on this routes file in app.js
Gym.find()
  .then((allTheGyms)=>{
    res.json(allTheGyms);
  })
  .catch((err)=>{
    res.json(err);
  })
});

module.exports = router;