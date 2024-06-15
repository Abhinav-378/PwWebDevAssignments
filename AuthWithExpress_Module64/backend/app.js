require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/db.js');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend'))); // Serve static files from the frontend directory

connectToDb();

const authRoutes = require('./routes/authRoutes.js');
app.use('/', authRoutes);

module.exports = app;
