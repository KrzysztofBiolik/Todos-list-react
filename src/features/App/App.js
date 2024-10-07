import TasksPage from "../tasks/TasksPage";
import Author from "../author/Author";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../Navigation";
import TaskPage from "../tasks/TaskPage";
import {toAuthor, toTask, toTasks } from "./routes";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <Author />
      </Route>
      <Route path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter >
)
