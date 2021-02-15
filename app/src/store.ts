import { createStore } from 'redux'
import { NotesReducer } from './screens/notes/reducers/NotesReducer'

export const store = createStore(NotesReducer)