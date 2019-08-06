const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GymSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  image: {type: String}
});

const Gym = mongoose.model('Gym', GymSchema);

module.exports = Gym;