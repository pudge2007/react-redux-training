const db = require("./db.json");

module.exports = (req, res, next) => {
  if (req.method == "POST" && req.path == "/signin") {
    if (req.body.login === "bob" && req.body.password === "123") {
      setTimeout(() => res.status(200).json(db.users[0]), 1000);
    } else {
      res.status(400).json({ message: "Неверные данные!" });
    }
  } else if (req.method == "POST" && req.path == "/logout") {
      res.status(200).json({});
  } else {
    next();
  }
};
