import { useState } from 'react'
import AddTodo from './components/ToDo/addTodo'
import TodoList from './components/ToDo/todoList'


function App(props) {

 
  return (
    <>
      <h1 className='text-xl text-center p-5 bg-yellow-800 text-white'>Welcome to the ToDo Page</h1>      
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
