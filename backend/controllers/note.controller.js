const asyncHandler = require("express-async-handler");
const { createNewNote, findNoteById, findManyNotes, findNoteByIdAndUpdate, findNoteByIdAndDelete } = require("../services/note.service");

const createNoteHandler = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const note = await createNewNote({ title, content });
    res.status(201).json(note);
});

const getNoteByIdHandler = asyncHandler(async (req, res) => {
    const note = await findNoteById(req.params.id);
    res.status(200).json(note);
})

const getManyNotesHandler = asyncHandler(async (req, res) => {
    const notes = await findManyNotes({ ...req.query });
    res.status(200).json(notes);
});

const updateNoteHandler = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const note = await findNoteByIdAndUpdate(req.params.id, { title, content });
    res.status(200).json(note);
});

const deleteNoteHandler = asyncHandler(async (req, res) => {
    const note = await findNoteByIdAndDelete(req.params.id);
    res.status(200).json(note);
});

module.exports = { 
    createNoteHandler, 
    getNoteByIdHandler, 
    getManyNotesHandler, 
    updateNoteHandler, 
    deleteNoteHandler 
};