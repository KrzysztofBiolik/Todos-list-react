import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import {Container} from "../../../common/Container";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));


    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body={!!task && (
                    <>
                        <strong>Ukończono:</strong> {task && task.done ? "Tak" : "Nie"}
                    </>
                )}
            />
        </Container>
    );
};

export default TaskPage;