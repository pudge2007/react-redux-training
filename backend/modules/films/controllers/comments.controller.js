const Comment = require("../models/comment.model");
const UserCtrl = require("../../users/controllers");

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

class CommentWithUserInfo {
  constructor(user, comment) {
    this._id = comment._id;
    this.film_id = comment.film_id;
    this.user_id = comment.user_id;
    this.comment = comment.comment;
    this.createdAt = comment.createdAt;
    this.user = user;
  }
}

exports.getComments = async (req, res) => {
  const { film_id } = req.query;
  try {
    const comments = await Comment.find({ film_id }).sort("-createdAt");
    const commentsWithUsers = await Promise.all(
      comments.map(async comment => {
        const user = await UserCtrl.getUser(comment.user_id, res);
        return new CommentWithUserInfo(user, comment);
      })
    );
    res.json(commentsWithUsers);
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

exports.saveComment = async (req, res) => {
  const { film_id, user_id, comment } = req.body;
  const newComment = new Comment({
    film_id,
    user_id,
    comment
  });

  try {
    const result = await newComment.save();
    const user = await UserCtrl.getUser(user_id, res);
    res.json(new CommentWithUserInfo(user, result));
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
