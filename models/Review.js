const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  gym:  {type: Schema.Types.ObjectId, ref: 'Gym'},
  title: {type: String, unique: true, required: true},
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  rating: {type: Number, required: true},
  content: {type: String},
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;