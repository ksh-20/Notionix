import express from "express";

const router = express.Router();

// creating an api endpoint - a route
router.get("/", (req, res) => {
    res.status(200).send("All notes fetched successfully!") //send method sends message to HTML
});

// route for creating a note
router.post("/", (req, res) => {
    res.status(201).json({message: "Note created successfully!"}) // json menthod sends response as json
});

// route for updating a note
router.put("/:id", (req, res) => {
    res.status(200).json({message: "Note updated successfully!"})
});

// route for note deletion
router.delete("/:id", (req, res) => {
    res.status().json({message: "Note deleted successfully!"})
});

export default router;