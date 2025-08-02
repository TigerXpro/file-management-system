const Note = require("../models/note.model");

const createNewNote = (body) => {
    return Note.create({ ...body });
};

const findManyNotes = (searchParam) => {
    return Note.findAll({ where: { ...searchParam } });
};

const findOneNote = (searchParam) => {
    return Note.findOne({ where: { ...searchParam } });
};

const findNoteById = async (id) => {
    const note = await Note.findByPk(id);
    if (!note) {
        throw new Error("Note with specified ID does not exist.");
    }
    return note;
};

const findNoteByIdAndUpdate = async (id, body) => {
    const note = await findNoteById(id);

    for (const key of Object.keys(body)) {
        note[key] = body[key] ?? note[key];
    }

    await note.save();
    return note;
};

const findNoteByIdAndDelete = async (id) => {
    const note = await findNoteById(id);
    await note.destroy();
    return note;
};

module.exports = { 
    createNewNote, 
    findManyNotes, 
    findOneNote, 
    findNoteById, 
    findNoteByIdAndUpdate,
    findNoteByIdAndDelete
}