import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NotesList({ searchText, notes, handleAddNote, handleDeleteNote }) {
  console.log(notes);
  return (
    <>
      {notes.length == 0 && searchText.length != 0 ? <div className="text-center"><span>Note not found</span></div>: (
        <>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(258px,_1fr))]">
          {notes.map((note) => <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/> )}
          <AddNote handleAddNote={handleAddNote}/>
          </div>
        </>
      )}
    </>
  )
}

export default NotesList