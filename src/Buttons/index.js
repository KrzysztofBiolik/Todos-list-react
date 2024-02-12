import "./style.css"

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                onClick={toggleHideDoneTasks}
                className="buttons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div >
    )
);

export default Buttons;