import mongoose from "mongoose";

// Creating a Schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }, 
        content: {
            type: String,
            required: true
        }
    }, 
    { timestamps: true } //default createdAt and updatedAt fields
);

// Creating a Model using the Schema
const Note = mongoose.model("Note", noteSchema);

export default Note;