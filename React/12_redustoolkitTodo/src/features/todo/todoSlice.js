import { createSlice, nanoid} from "@reduxjs/toolkit";

/*
 🔹 initialState = starting data of this slice
 🔹 This represents the default structure of our todo feature
*/

// Starting state (initial data)
const initialState = {
    todoList: [ // this is a list of todos, each todo is an object with id and text
        { id:1, text: "Hello World"}
    ]
}


/*
 🔹 createSlice = combines
    - state (data)
    - reducers (functions to change data)
    - actions (auto-generated)

 🔹 name: "todo"
    → This becomes the key inside Redux store
    → state.todo
*/

// Create a slice (state + actions + reducers)
export const todoSlice = createSlice({ 
    name: "todo", // slice name
    initialState, // initial data
    reducers: { 
        // Add a new todo
        addTodo: (state, action) =>{  // state → current data of this slice, action → data sent from UI

            const newTodoItem = { //new todo that we want to add to the list of todos in the state
                id: nanoid(), // unique id
                text: action.payload.text, // get text from UI
            }
            state.todoList.push(newTodoItem) // Add new todo to the list

        },
        removeTodo: (state, action)=>{
            state.todoList = state.todoList.filter((singleTodo)=> singleTodo.id!== action.payload.id) // remove the element
        },
        
        // Update todo
        updateTodo: (state, action)=>{
            state.todoList = state.todoList.map((singleTodo)=>{
                if(singleTodo.id === action.payload.id){
                    return {...singleTodo, text: action.payload.text} // update the text of the todo
                }
                return singleTodo;
            });
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions; // export actions

export default todoSlice.reducer; // export reducer (this will be used in the store to create the store)