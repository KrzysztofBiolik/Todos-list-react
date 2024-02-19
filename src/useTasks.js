import { useLocalStorageData } from "./useLocalStorageData";

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorageData("tasks", []);


    const setAllTaskDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };



    return {
        tasks,
        setAllTaskDone,
    };
};