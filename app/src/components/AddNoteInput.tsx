import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

const AddNoteInput: React.FC = () => {
  const [note, setNote] = useState("")
  const dispatch = useDispatch()

  const updateNote = (e:ChangeEvent<HTMLInputElement>) =>{
    setNote(e.target.value)
  }

  const handleSubmit = () => {
    dispatch({ type: "ADD_NOTE", payload: note })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={note} onChange={updateNote} />
      <input type="submit" />
    </form>
  )
}

export default AddNoteInput