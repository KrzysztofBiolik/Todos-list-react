import Button  from "../Button";
import { fetchExampleTasks } from "../../tasksSlice";
import { selectIsLoading } from "../../tasksSlice";
import { useAppDispatch, useAppSelector } from "../../../../App/hooks";

export default () => {
    const loading = useAppSelector(selectIsLoading);

    const dispatch = useAppDispatch();

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
            >
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};
