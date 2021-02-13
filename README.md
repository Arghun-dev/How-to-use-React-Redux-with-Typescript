# How-to-use-React-Redux-with-Typescript

## Implementing project

creating project with typescript template

`$. create-react-app app --template typscript`


adding redux and react-redux

`$. yarn add redux react-redux`

you don't need to install additional types for `redux`, but you need to install additional types for `react-redux`

`$. yarn add @types/react-redux`


## How to implement actions and reducers using typescript

**AddNote Action**

```js
export type Action = { type: "ADD_NOTE", payload: string }

export const addNote = (note: string):Action => ({
  type: "ADD_NOTE",
  payload: note
})
```

**Notes Reducer**

```js
import { Action } from '../actions/AddNote'

export interface NotesState {
  notes: string[]
}

const initialState = {
  notes: []
}

export const notesReducer = (state:NotesState = initialState, action:Action) => {
  switch(action.type) {
    case 'ADD_NOTE': {
      return {...state, notes: [...state.notes, action.payload]}
    }
    default: return state
  }
}
```
