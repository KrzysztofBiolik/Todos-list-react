import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink
            activeClassName="active"
            to="/zadania">
            Zadania
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="/autor">
            O Autorze
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
)
