import { List, Item, Content, Button } from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, toggleTaskDone, removeTask, selectHideDoneTasks } from '../tasksSlice';

const TaskList = () => {
    const {tasks} = useSelector(selectTasks);
    const hideDoneTasks = useSelector(selectHideDoneTasks);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDoneTasks}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )

}

export default TaskList;