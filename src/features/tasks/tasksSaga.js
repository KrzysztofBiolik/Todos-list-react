import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
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

