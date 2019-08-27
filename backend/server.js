const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const filmsRouter = require('./modules/films/routes');
const usersRouter = require('./modules/users/routes');

app.use('/api/films', filmsRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});