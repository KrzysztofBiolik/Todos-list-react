import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
   name: "tasks",
   initialState: {
      tasks: [],
      hideDoneTasks: false,
   },

   reducers: {
      addTask: (previousState, action) => {
         previousState.tasks.push(action.payload);
      },
      toggleHideDoneTasks: previousState =>{
         previousState.hideDoneTasks = !previousState.hideDoneTasks;
      },
   },
});

export const { addTask, toggleHideDoneTasks} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;