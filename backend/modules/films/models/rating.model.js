const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    film_id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    rating: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
