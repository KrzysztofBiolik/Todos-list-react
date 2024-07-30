import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import ExampleTasksButton from "./FetchExampleTaskButton";

function TasksPage() {
  return (

    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton/>}
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList />
        }
        extraHeaderContent={
          <Buttons />
        }
      />
    </Container>
  )
};

export default TasksPage;



