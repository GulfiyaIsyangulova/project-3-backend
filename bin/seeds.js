const mongoose     = require('mongoose');
const Gym        = require('../models/Gym');


// mongoose
//   .connect('mongodb://localhost/', {useMongoClient: true})
mongoose
  .connect('mongodb://localhost/jiu-jitsu-locator-project', {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
  


  const blah = [
    {
      name: "127 BJJ",
      address: "3901 A Main St. Suite 102A, Philadelphia, PA, 19127, United States of America",
      // image: {type: String}
    },
    {
        name: "479-Bjj",
        address: "1772 W. Sunset Ste 2B, Springdale, AR, 72762, United States of America",
        
    },

    // {
    //     title: "Catcher In the Rye",
    //     author: "JD Salinger",
    //     description: 'Guy thinks everything is phony but is rich and privileged but miserable anyway.',
    //     rating: 9
    // }
  ];


 Gym.create(blah)
  .then(()=>{
    console.log('it worked')
  })
  .catch((err)=>{
    console.log('it didnt work',err)

  })