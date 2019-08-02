const express = require('express');
const router  = express.Router();
const Review = require('../models/Review');

/* GET home page */
router.get('/', (req, res, next) => {
  // this route is actualy localhost:3000/api/projects 
//  because of the preface i put on this routes file in app.js
Review.find()
  .then((allTheReviews)=>{
    res.json(allTheReviews);
  })
  .catch((err)=>{
    res.json(err);
  })
});



  router.get('/details/:id', (req, res, next)=>{
    Review.findById(req.params.id)
    .then((singleReview)=>{
      res.json(singleReview);
    })
    .catch((err)=>{
      res.json(err);
    })

  })



  router.post('/', (req, res, next)=>{

    //res.json(req.body);

    //es.json(req.body.owner)
    Review.create({
      // gym: req.body.gymid,
      gym: req.user._id,
      title: req.body.title,
      owner: req.user._id,
      rating: req.body.rating,
      content: req.body.content
    })
    .then((singleReview)=>{
      res.json(singleReview);
    })
    .catch((err)=>{
      res.json(err);
    });
  })

  router.post('/update/:id', (req, res, next)=>{
    Review.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      rating: req.body.rating,
      content: req.body.content,
      
    })
    .then((singleReview)=>{
      res.json(singleReview);
    })
    .catch((err)=>{
      res.json(err);
    })
  })


  router.delete('/:id', (req, res, next)=>{

    Review.findById(req.params.id)
    .then((theReview)=>{


      // theReview.tasks.forEach(eachTaskID => {
      //   Task.findByIdAndRemove(eachTaskID)
      // })


      Review.findByIdAndRemove(theReview._id)
      .then((singleReview)=>{
        res.json(singleReview);
      })
      .catch((err)=>{
        res.json(err);
      })
  

    })
    .catch((err)=>{
      res.json(err);
    })

  })



module.exports = router;
