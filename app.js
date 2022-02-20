import CountryAPI from "/CountryAPI.js";

export default class App {
    constructor(root) {
        this.country = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());
        this._refreshNotes();
    }

    _refreshNotes() {
        const notes = CountryAPI.getAllNotes();
        this._setNotes(notes);

        if (notes.length > 0) {
            this._setActiveNote(notes[0]);
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updatreNotePreviewVIsivility(notes.length > 0);
    }

    _handlers() {

        return {
            onNoteAdd: () => {
                // const newNote = {
                //     title: "New Note",
                //     body: "Take Note..."
                // };

                CountryAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteDelete: noteId => {
                CountryAPI.deleteNote(noteId);
                this._refreshNotes();
            }
        };
    }
}