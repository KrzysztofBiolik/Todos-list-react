import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
   name: "tasks",
   initialState: {
      tasks: [],
      hideDoneTasks: false,
   },

   reducers: {
      addTask: ({ tasks }, { payload: task }) => {
         tasks.push(task);
      },
      toggleHideDoneTasks: previousState => {
         previousState.hideDoneTasks = !previousState.hideDoneTasks;
      },
      toggleTaskDone: ({ tasks }, { payload: taskId }) => {
         const index = tasks.findIndex(task => task.id === taskId);
         tasks[index].done = !tasks[index].done;
      },
      removeTask: ({ tasks }, { payload: taskId }) => {
         const index = tasks.findIndex(task => task.id === taskId);
         tasks.splice(index, 1);
      },
      setAllTaskDone: ({ tasks }) => {
         for (const task of tasks) {
            task.done = true;
         }
      },
   },
});

export const {
   addTask,
   toggleHideDoneTasks,
   toggleTaskDone,
   removeTask,
   setAllTaskDone
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export const selectHideDoneTasks = state => state.tasks.hideDoneTasks;
export const selectIfEveryTaskDone = state => state.tasks.tasks.every(({ done }) => done);
export const selectIfNoTasks = state => state.tasks.tasks.length === 0;

export default tasksSlice.reducer;