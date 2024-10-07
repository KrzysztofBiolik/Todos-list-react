import { takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { getExampleTasks } from "./TasksPage/Buttons/getExampleTask";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks)

    yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
    console.log("Saga");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}

