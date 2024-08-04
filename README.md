# Krzysztof Biolik To-do list

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Open Graph image](https://github.com/KrzysztofBiolik/Todos-list-react/blob/main/public/images/OG_to-do_list.png?raw=true)

## Demo

You can see how the to-do list works in the gif below.

![Gif](https://github.com/KrzysztofBiolik/Todos-list-react/blob/main/public/images/To-do%20List%20gif.gif?raw=true)

You can try for yourself how the currency exchange works at this link.

[To-do list link](https://krzysztofbiolik.github.io/Todos-list-react/#/zadania)

## How does the to-do list work?

The site has navigation that allows you to switch between the about the author page and the to-do list page.

The About the Author page contains basic information about the author of the to-do list page.

The To-do list page of the task list consists of 3 basic sections:

1.
- A form for adding a new task to the dynamically generated list.
- A button for downloading sample tasks

2.
- A search engine for selecting tasks that contain a given text string

3.
- A dynamically generated task list, in which each task has a button for marking (or unmarking) the task as completed by crossing it out. The second button is used to remove the task from the list.

- If the task list is not empty, two buttons appear. The first one is used to mark all tasks as completed. When all tasks are completed, this button is disabled. The second button is used to toggle the hiding of completed tasks.

- Clicking on a specific task from the list takes you to a subpage with task details.


## Technologies used in this project

- JSX (JavaScript XML)
- JavaScript ES6+ features
- Normalize.css, CSS Grid, CSS Flexbox, CSS media queries
- React.js
- Create React App
- Controlled components (controlled by state for a single source of truth in behavior)
- Custom Hooks
- Local Storage with Redux-Saga
- Redux (utilizing actions, reducers, and middleware for asynchronous operations)
- React Router (including BrowserRouter, Route, Switch, and NavLink for navigation)
- URL-related features like URLSearchParams, useLocation, useHistory: React Router and React Hooks
JavaScript generator functions (pause and resume functions)
- Markdown leanguage


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

