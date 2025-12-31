export const getNotes = (req, res) => {
    res.status(200).send("All notes fetched successfully!") //send method sends it to html directly
};

export const createNotes = (req, res) => {
    res.status(201).json({message: "Note created successfully!"}) // json menthod sends response as json
};

export const updateNotes = (req, res) => {
    res.status(200).json({message: "Note updated successfully!"})
};

export const deleteNotes = (req, res) => {
    res.status().json({message: "Note deleted successfully!"})
};