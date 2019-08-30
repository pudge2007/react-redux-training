const router = require("express").Router();
const FilmCtrl = require("../controllers/films.controller");
const RatingCtrl = require("../controllers/rating.controller");
const CommentsCtrl = require("../controllers/comments.controller");

router
  .route("/")
  .get((req, res) => FilmCtrl.getFilms(req, res))
  .post((req, res) => FilmCtrl.addFilm(req, res));

router
  .route("/comments")
  .get((req, res) => CommentsCtrl.getComments(req, res))
  .post((req, res) => CommentsCtrl.saveComment(req, res));

router.route("/rating").post((req, res) => RatingCtrl.setRating(req, res));

router.route("/:id").get((req, res) => FilmCtrl.getFilmById(req, res));

module.exports = router;
