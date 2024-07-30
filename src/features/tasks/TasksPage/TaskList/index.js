import { List, Item, Content, Button, StyledLink } from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleTaskDone,
    removeTask,
    selectHideDoneTasks,
    selectTasksByQuery
} from '../../tasksSlice';
import searchQueryParamName from "../searchQueryParamName";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toTask } from "../../../../routes";

const TaskList = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDoneTasks = useSelector(selectHideDoneTasks);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    hidden={hideDoneTasks && task.done}
                    key={task.id}>
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        toggleDone>
                        {task.done ? " 🗸 " : ""}
                    </Button>
                    <Content
                        done={task.done}>
                        <StyledLink to={toTask({id:task.id})}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        remove>🗑
                    </Button>
                </Item>
            ))}
        </List>
    )

}

export default TaskList;