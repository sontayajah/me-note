import { MdDeleteForever } from 'react-icons/md'

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="bg-[#fef68a] rounded-[10px] p-[1rem] min-h-[258px] flex flex-col justify-between whitespace-pre-wrap break-words">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className='cursor-pointer' size='1.3em' />
      </div>
    </div>
  )
}

export default Note