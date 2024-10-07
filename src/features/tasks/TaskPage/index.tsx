import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import {Container} from "../../../common/Container";
import { useAppSelector } from "../../../App/hooks";
import { Task } from "../types";

function TaskPage() {
    const { id } = useParams<{id: Task["id"]}>();
    const task = useAppSelector(state => getTaskById(state, id));

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