import { useEffect, useState } from 'react'
import { TodoProvider } from "./contexts"
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((oldTodo)=>[{id:Date.now(), ...todo},...oldTodo])
  }
  
  const updateTodo = (id, todo)=>{
    setTodos((oldTodo)=> oldTodo.map((individualTodo)=> (individualTodo.id === id)? todo : individualTodo ));
  }

  const deleteTodo = (id)=>{
    setTodos((oldTodo)=> oldTodo.filter((individualTodo)=> individualTodo.id !== id)); // this will remove the element which is having the same id as the id we are passing in the function
  }

  const toggleComplete = (id)=>{
    setTodos((oldTodo)=> oldTodo.map((individualTodo)=> individualTodo.id === id ? {...individualTodo, completed:!individualTodo.completed} : individualTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length>0){
      setTodos(todos);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
           <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key = {todo.id} className='w-full'>
              <TodoItem todo={todo}/>  
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
