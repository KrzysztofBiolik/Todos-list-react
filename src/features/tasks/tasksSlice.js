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
      toggleHideDoneTasks: previousState => {
         previousState.hideDoneTasks = !previousState.hideDoneTasks;
      },
      toggleTaskDone: (previousState, action) => {
         const index = previousState.tasks.findIndex(task => task.id === action.payload);
         previousState.tasks[index].done = !previousState.tasks[index].done;
      },
   },
});

export const { addTask, toggleHideDoneTasks, toggleTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;