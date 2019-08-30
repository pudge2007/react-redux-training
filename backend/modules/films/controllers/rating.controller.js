const Rating = require("../models/rating.model");
const Film = require("../models/film.model");

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

const ratingAverage = ratings => {
  return +(
    ratings.map(r => r.rating).reduce((a, b) => a + b) / ratings.length
  ).toFixed(2);
};

const getAverageFilmRatings = async film_id => {
  try {
    const ratings = await Rating.find({ film_id }, "rating");
    return ratingAverage(ratings);
  } catch (err) {
    return 0;
  }
};

const checkIsRatingSetsByUser = async (film_id, user_id, res) => {
  try {
    const count = await Rating.countDocuments({ film_id, user_id });
    return !!count;
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

exports.setRating = async (req, res) => {
  const { film_id, user_id, rating } = req.body;
  const newRating = new Rating({
    film_id,
    user_id,
    rating
  });

  try {
    const check = await checkIsRatingSetsByUser(film_id, user_id, res);

    if (check) {
      return res.status(400).json({
        message: "Вы уже выставляли рейтинг этому фильму!"
      });
    } else {
      await newRating.save();
      const filmRating = await getAverageFilmRatings(film_id);

      await Film.updateOne({ id: film_id }, { rating: filmRating });

      res.json(filmRating);
    }
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
