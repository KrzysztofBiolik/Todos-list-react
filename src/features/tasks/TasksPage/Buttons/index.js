import { Wrapper} from "./styled";
import Button from "../Button";
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleHideDoneTasks,
    setAllTaskDone,
    selectHideDoneTasks,
    selectIfEveryTaskDone,
    selectIfNoTasks,
} from '../../tasksSlice';

const Buttons = () => {
    const hideDoneTasks = useSelector(selectHideDoneTasks);
    const ifEveryTaskDone = useSelector(selectIfEveryTaskDone);
    const ifNoTasks = useSelector(selectIfNoTasks);

    const dispatch = useDispatch();

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