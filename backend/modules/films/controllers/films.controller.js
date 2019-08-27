const Film = require("../models/film.model");
const RatingCtrl = require('../controllers/rating.controller');

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

exports.getFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

exports.getFilmById = async (req, res) => {
  const { id } = req.params;

  try {
    const film = await Film.findOne({ id });
    if (!film) {
      return res.status(404).json({ message: "Film not found with id " + id });
    } else {
      const filmRating = await RatingCtrl.getFilmRatings(id);
      film.rating = filmRating;
      res.json(film);
    }
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
