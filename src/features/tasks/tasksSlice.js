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
      removeTask: (previousState, action) => {
         const index = previousState.tasks.findIndex(task => task.id === action.payload);
         previousState.tasks.splice(index, 1);
      },
   },
});

export const { addTask, toggleHideDoneTasks, toggleTaskDone, removeTask} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;