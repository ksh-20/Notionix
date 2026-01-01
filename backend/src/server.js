import express from "express";
import dotenv from "dotenv";
dotenv.config();
import notesRoutes from "./routes/notesRoutes.js";

import { connectDB } from "./config/db.js";

const app = express();

connectDB();

// middleware
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`)
});