import { Wrapper, Button } from "./styled";
import { useSelector } from 'react-redux';
import { selectTasks } from '../tasksSlice';

const Buttons = ({ hideDoneTasks, toggleHideDoneTasks, setAllTaskDone }) => {
    const {tasks} = useSelector(selectTasks);
    
    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={toggleHideDoneTasks}
                    >
                        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={setAllTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper >
    )
};

export default Buttons;