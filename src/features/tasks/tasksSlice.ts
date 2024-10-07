import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTasksFromLocalStorage } from './tasksLocalStorage';
import { Task } from "./types";
import { RootState } from '../../App/store';

interface InitialState {
   tasks: Task[];
   hideDoneTasks: boolean;
   loading: boolean;
}

const initialState: InitialState = {
   tasks: getTasksFromLocalStorage(),
   hideDoneTasks: false,
   loading: false,
};

const tasksSlice = createSlice({
   name: "tasks",
   initialState,
   reducers: {
      addTask: ({ tasks }, { payload: task }: PayloadAction<Task>) => {
         tasks.push(task);
      },
      toggleHideDoneTasks: previousState => {
         previousState.hideDoneTasks = !previousState.hideDoneTasks;
      },
      toggleTaskDone: ({ tasks }, { payload: taskId }: PayloadAction<Task["id"]>) => {
         const index = tasks.findIndex(task => task.id === taskId);
         tasks[index].done = !tasks[index].done;
      },
      removeTask: ({ tasks }, { payload: taskId }: PayloadAction<Task["id"]>) => {
         const index = tasks.findIndex(task => task.id === taskId);
         tasks.splice(index, 1);
      },
      setAllTaskDone: ({ tasks }) => {
         for (const task of tasks) {
            task.done = true;
         }
      },
      fetchExampleTasks: state => {
         state.loading = true;
      },
      setTasks: (state, { payload: tasks }: PayloadAction<Task[]>) => {
         state.tasks = tasks;
         state.loading = false;
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

export const selectTasksState = (state: RootState) => state.tasks;


export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDoneTasks = (state: RootState) => selectTasksState(state).hideDoneTasks;
export const selectIfEveryTaskDone = (state: RootState) => selectTasks(state).every(({ done }) => done);
export const selectIfNoTasks = (state: RootState) => selectTasks(state).length === 0;

export const getTaskById = (
   state: RootState,
   taskId: Task["id"]
) =>
   selectTasks(state).find(({ id }) => id === taskId);


export const selectTasksByQuery = (
   state: RootState,
   query: string | null,
) => {

   const tasks = selectTasks(state);

   if (!query || query.trim() === "") {
      return tasks;
   }

   return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export const selectIsLoading = (state: RootState) => selectTasksState(state).loading;

export default tasksSlice.reducer;