import { Wrapper} from "./styled";
import Button from "../Button";
import {
    toggleHideDoneTasks,
    setAllTaskDone,
    selectHideDoneTasks,
    selectIfEveryTaskDone,
    selectIfNoTasks,
} from '../../tasksSlice';
import { useAppDispatch, useAppSelector } from "../../../../App/hooks";

const Buttons = () => {
    const hideDoneTasks = useAppSelector(selectHideDoneTasks);
    const ifEveryTaskDone = useAppSelector(selectIfEveryTaskDone);
    const ifNoTasks = useAppSelector(selectIfNoTasks);

    const dispatch = useAppDispatch();

    return (
        <Wrapper>
            {!ifNoTasks && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDoneTasks())}
                    >
                        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllTaskDone())}
                        disabled={ifEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper >
    )
};

export default Buttons;