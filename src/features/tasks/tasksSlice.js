import { createSlice } from '@reduxjs/toolkit'
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
   name: "tasks",
   initialState: {
      tasks: getTasksFromLocalStorage(),
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
      fetchExampleTasks: state => {
      
      },
      setTasks: (state, { payload: tasks }) => {
         state.tasks = tasks;
       
      },
   },
});

export const {
   addTask,
   toggleHideDoneTasks,
   toggleTaskDone,
   removeTask,
   setAllTaskDone,
   fetchExampleTasks,
   setTasks
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;


export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDoneTasks = state => selectTasksState(state).hideDoneTasks;
export const selectIfEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIfNoTasks = state => selectTasks(state).length === 0;

export const getTaskById = (state, taskId) =>
   selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
   const tasks = selectTasks(state);

   if (!query || query.trim() === "") {
      return tasks;
   }

   return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};



export default tasksSlice.reducer;