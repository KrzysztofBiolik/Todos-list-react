import React from "react";
import Button  from "../Button";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../tasksSlice";

export default () => {
    const loading = useSelector(selectIsLoading);

    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}>
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};
