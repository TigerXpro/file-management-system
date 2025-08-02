const { Router } = require("express");
const { createNoteHandler, getNoteByIdHandler, getManyNotesHandler, updateNoteHandler, deleteNoteHandler } = require("../controllers/note.controller");

const router = Router()

router.route("/")
    .post(createNoteHandler)
    .get(getManyNotesHandler);
router.route("/:id")
    .get(getNoteByIdHandler)
    .patch(updateNoteHandler)
    .delete(deleteNoteHandler);

module.exports = router;