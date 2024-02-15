import { useLocalStorageData } from "./useLocalStorageData";

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorageData("tasks", []);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }
            return task;
        }));
    };

    const setAllTaskDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return {
        tasks,
        removeTask,
        toggleTaskDone, 
        setAllTaskDone,
        addNewTask,
    };
};