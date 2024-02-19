import { Wrapper, Button } from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, toggleHideDoneTasks, setAllTaskDone } from '../tasksSlice';

const Buttons = () => {
    const {tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDoneTasks())}
                    >
                        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(setAllTaskDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper >
    )
};

export default Buttons;