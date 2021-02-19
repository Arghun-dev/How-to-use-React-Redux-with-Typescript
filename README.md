# How-to-use-React-Redux-with-Typescript

I think the best guide to learn how to use typescript in redux is the `Redux` official website.

for example I want to create a `todoApp` using `Typescript` and `Redux`

`step 1`

**src/store/todos/types.ts**

```js
// states
export interface ITodo {
  text: string;
  completed: boolean;
}

export interface ITodos {
  todos: ITodo[];
}

// actions
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

interface AddTodoAction {
  type: ADD_TODO,
  payload: ITodo
}

interface DeleteTodoAction {
  type: DELETE_TODO,
  payload: number
}

export type TodosActionTypes = AddTodoAction | DeleteTodoAction
```

**src/store/todos/actions.ts**

```js
import { ADD_TODO, DELETE_TODO, TodosActionTypes, ITodo } from './types';

export function addTodo(newTodo:ITodo):TodosActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export function deleteTodo(id:number):TodosActionTypes {
  return {
    type: DELETE_TODO,
    payload: id
  }
}
```

**src/store/todos/reducer.ts**

```js
import {
  ADD_TODO,
  DELETE_TODO,
  TodosActionTypes,
  ITodos
} from './types'

const initialState:ITodos {
  todos: []
}

export function TodosReducer(state = initialState, action:TodosActionTypes):ITodos {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default: return state
  }
}
```

We now need to generate the root reducer function, which is normally done using combineReducers. Note that we do not have to explicitly declare a new interface for RootState. We can use ReturnType to infer state shape from the rootReducer

```js
// src/store/index.ts

import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducers'

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>
```

**Type Checking Middleware**

A middleware is a higher-order function that composes a dispatch function to return a new dispatch function. To create a type checked middleware function, we can leverage the Middleware interface provided by Redux together with our store type (as defined in the previous example):

```js
// src/middleware/example.ts

import { Middleware } from 'redux'

import { RootState } from '../store'

export const exampleMiddleware: Middleware<
  {}, // legacy type parameter added to satisfy interface signature
  RootState
> = store => next => action => {
  // code here
}
```

**Working with React Redux**

`Typing the useSelector hook`


## Implementing project

creating project with typescript template

`$. create-react-app app --template typscript`


adding redux and react-redux

`$. yarn add redux react-redux`

you don't need to install additional types for `redux`, but you need to install additional types for `react-redux`

`$. yarn add @types/react-redux`


## How to implement actions and reducers using typescript

**store.ts**

```js
import { createStore, combineReducer } from 'redux'
import { TodosReducer } from './todos'

export const rootReducer({
  TodosReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
```

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
