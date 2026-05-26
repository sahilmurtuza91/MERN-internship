import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage, loadFromLocalStorage} from  "../localStorage/localStorage"
const initialState = {
    tasks: loadFromLocalStorage(),
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action)=>{
            state.tasks.unshift({ ...action.payload, id: Date.now() });

            saveToLocalStorage(state.tasks);
        },
        deletTask: (state, action)=>{
            state.tasks = state.tasks.filter((singleTask)=>singleTask.id !== action.payload);

            saveToLocalStorage(state.tasks);
        },
        toggleTask: (state, action)=>{
            const task = state.tasks.find((singleTask)=>singleTask.id === action.payload);
            if(task){
                task.complete = !task.complete;
                task.completedAt = task.complete ? new Date().toISOString() : null;
            }
            saveToLocalStorage(state.tasks);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((singleTask) => singleTask.id === action.payload.id);

            if(index !== -1){
                state.tasks[index] = {
                    ...state.tasks[index], 
                    ...action.payload,
                };
                saveToLocalStorage(state.tasks);
            }
        }
    }
})

export const {addTask, deletTask, toggleTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;