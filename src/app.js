import express from "express";
import morgan from "morgan";
import session from "express-session";
import cors from 'cors'
// Routes
import commentsRoutes from "./routes/comments.routes";


const app = express();
app.use(cors())
app.set('port', 4000)

// Middlewares
app.use(morgan("dev"));
app.use(express.json())

// Session
app.use(session({
    secret: 'webslesson',
    resave: true,
    saveUninitialized: true
}));

// Routes
app.use("/api/comments", commentsRoutes);


export default app;