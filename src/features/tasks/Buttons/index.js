import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllTaskDone }) => (
    tasks.length > 0 && (
        <Wrapper className="buttons">
            <Button
                className="buttons__button"
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllTaskDone}
            >
                Ukończ wszystkie
            </Button>
        </Wrapper >
    )
);

export default Buttons;