import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
   name: "tasks",
   initialState: {
      tasks: [],
   },

   reducers: {
      addTask: (previousState, action) => {
         previousState.tasks.push(action.payload);
      },
   },
});

export const { addTask} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;