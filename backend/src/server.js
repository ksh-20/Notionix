import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

// middleware
app.use(
    cors({
        origin: "http://localhost:5173"
    })
);
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`)
});

//Best practice for server - first connect DB and then start server
/*
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`)
    });
});
*/