import { List, Item, Content, Button, StyledLink } from "./styled";
import {
    toggleTaskDone,
    removeTask,
    selectHideDoneTasks,
    selectTasksByQuery
} from '../../tasksSlice';
import searchQueryParamName from "../searchQueryParamName";
import { useLocation } from "react-router-dom";
import { toTask } from "../../../../App/routes";
import { useAppDispatch, useAppSelector } from "../../../../App/hooks";
import { Task } from "../../types";

const TaskList = () => {

    const location = useLocation();
    const query: string | null = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useAppSelector(state => selectTasksByQuery(state, query));
    const hideDoneTasks = useAppSelector(selectHideDoneTasks);

    const dispatch = useAppDispatch();

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