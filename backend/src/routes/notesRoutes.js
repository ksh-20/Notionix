import express from "express";
import { getNotes } from "../controllers/notesController.js";
import { createNotes } from "../controllers/notesController.js";
import { updateNotes } from "../controllers/notesController.js";
import { deleteNotes } from "../controllers/notesController.js";
import { getNoteById } from "../controllers/notesController.js";

const router = express.Router();

// creating an api endpoint - a route
router.get("/", getNotes);

router.get("/:id", getNoteById);

// route for creating a note
router.post("/", createNotes);

// route for updating a note
router.put("/:id", updateNotes);

// route for note deletion
router.delete("/:id", deleteNotes);

export default router;