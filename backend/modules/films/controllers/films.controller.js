const Film = require("../models/film.model");

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

exports.getFilms = async (req, res) => {
  const { search } = req.query;
  const query = search ? { title: { $regex: search, $options: "i" } } : {};
  try {
    const films = await Film.find(query);
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
      res.json(film);
    }
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

exports.addFilm = async (req, res) => {
  const film = req.body;
  const newFilm = new Film(film);

  try {
    await newFilm.save();
    res.json("Film added!");
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
