const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const filmSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    eng: String,
    description: { type: String, required: true },
    imageURI: { type: String, required: true },
    rating: Number
  },
  {
    timestamps: true
  }
);

const Exercise = mongoose.model("Film", filmSchema);

module.exports = Exercise;
