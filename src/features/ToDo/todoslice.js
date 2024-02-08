import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[
        {
            id: nanoid(),
            text: "Hello World Hi are You",
            isEditable: false
        }
    ]
}

export const todoSlice= createSlice(
    {
        name:"todo",  // a name used in the reducer, action and selector
        initialState,   // provide initial state
        reducers:{
            addToDo: (state,action)=>{
                const todo={
                    id : nanoid(),
                    text: action.payload,
                    isEditable: false
                }
                state.todos.push(todo);
            },
            removeToDo: (state,action)=>{
                state.todos=state.todos.filter((todo)=>(
                    todo.id!==action.payload
                ))
            },
            // update todo
        }

    }
)

export const {addToDo,removeToDo}= todoSlice.actions