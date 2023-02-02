import { useState } from "react"

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 200

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }

  const handleSaveClick = (event) => {
    if (noteText.length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className="bg-[#67d7cc] rounded-[10px] p-[1rem] flex flex-col justify-between new">
        <textarea className="border-none resize-none bg-[#67d7cc] focus:outline-none" rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange}></textarea>
        <div className="flex items-center justify-between">
            <small>Up to {characterLimit} characters</small>
            <button className="bg-[#e1e1e1] border-none rounded-[15px] py-[5px] px-[10px] hover:bg-[#ededed] hover:cursor-pointer" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote