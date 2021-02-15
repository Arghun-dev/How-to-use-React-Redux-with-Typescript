import React from 'react'
import { useSelector } from 'react-redux'
import { NotesState } from './reducers/NotesReducer'

const Notes: React.FC = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)

  return (
    <ul>
      {notes.map((note) => {
        <li key={note}>{note}</li>
      })}
    </ul>
  )
}

export default Notes