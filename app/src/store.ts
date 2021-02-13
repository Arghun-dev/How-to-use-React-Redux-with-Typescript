import { create } from 'domain'
import { createStore } from 'redux'
import { notesReducer } from './screens/notes/reducers/NotesReducer'

export const store = createStore(notesReducer)