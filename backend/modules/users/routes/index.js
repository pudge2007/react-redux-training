const router = require("express").Router();
const users = require("../controllers");

router.route("/sign-up").post((req, res) => users.signUp(req, res));

router.route("/sign-in").post((req, res) => users.signIn(req, res));

module.exports = router;
