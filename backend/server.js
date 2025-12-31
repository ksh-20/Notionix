import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// creating an api end point
app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 10 notes")
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`)
});