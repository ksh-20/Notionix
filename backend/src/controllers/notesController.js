import Note from "../models/Note.js";

export const getNotes = async(req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1}); //newest first, for default oldest to newest its 1
        // res.status(200).send("All notes fetched successfully!") //send method sends it to html directly
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getNotes controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const getNoteById = async(req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if(!note)
            return res.status(404).json({message: "Note not found"});

        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const createNotes = async(req, res) => {
    try {
        const {title, content} = req.body;
        const note = new Note({title: title, content: content});

        const savedNote = await note.save(); //save it to the database

        res.status(201).json(savedNote) // json menthod sends response as json
    } catch (error) {
        console.error("Error in createNotes controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const updateNotes = async(req, res) => {
    try {
        const {title, content} = req.body;
        
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

        if(!updatedNote)
            return res.status(404).json({message: "Note not found"});

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNotes controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const deleteNotes = async(req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote)
            return res.status(404).json({message: "Note not found"});

        res.status(200).json(deletedNote);
    } catch (error) {
        console.error("Error in deleteNotes controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};