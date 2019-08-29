const router = require("express").Router();
const FilmCtrl = require("../controllers/films.controller");
const RatingCtrl = require("../controllers/rating.controller");

router
  .route("/")
  .get((req, res) => FilmCtrl.getFilms(req, res))
  .post((req, res) => FilmCtrl.addFilm(req, res));

router.route("/:id").get((req, res) => FilmCtrl.getFilmById(req, res));

router.route("/rating").post((req, res) => RatingCtrl.setRating(req, res));

module.exports = router;
