import { Task } from "../../types";

export const getExampleTasks = async () => {
    const response = await fetch("/Todos-list-react/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return (await response.json()) as Task[];
};

