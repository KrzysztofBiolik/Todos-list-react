import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        

        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* watchFetchExampleTasks() {
    console.log("Saga");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}