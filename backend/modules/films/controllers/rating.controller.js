const Rating = require("../models/rating.model");

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

const ratingAverage = ratings => {
  return +(ratings.map(r => r.rating).reduce((a, b) => a + b) / ratings.length).toFixed(2);
};

exports.getFilmRatings = async film_id => {
  try {
    const ratings = await Rating.find({ film_id }, "rating");
    return ratingAverage(ratings);
  } catch (err) {
    return 0;
  }
};

exports.setRating = async (req, res) => {
  const { film_id, rating } = req.body;
  const newRating = new Rating({
    film_id,
    rating
  });

  try {
    await newRating.save();
    const filmRating = await module.exports.getFilmRatings(film_id);
    res.json(filmRating);
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
