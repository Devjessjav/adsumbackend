import express from "express";
import morgan from "morgan";
import session from "express-session";
import cors from 'cors'
const config = require('./config');

const app = express();
app.use(cors())
app.set('port', config.app.port)

// Middlewares
app.use(morgan("dev"));
app.use(express.json())

// Session
app.use(session({
    secret: 'webslesson',
    resave: true,
    saveUninitialized: true
}));

module.exports = app;