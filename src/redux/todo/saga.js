/* eslint-disable no-unused-vars */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
    getTodoSuccess,
    getTodoError,
    addTodoSuccess,
    addTodoError,
    deleteTodoSuccess,
    deleteTodoError,
    editTodoSuccess,
    editTodoError
} from "./actions";

import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: " http://localhost:3000",
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => {
        return response && response.data;
    },
    (error) => {
        return error.response && error.response.data;
    }
);

export function* watchGetTodoList() {
    yield takeEvery("GET_TODO", getTodoList);
}

const getTodoAsync = async (payload) => {
    if (payload?.todo?.filter) {
        return await api
        .get(`/todos?status=${payload?.todo?.filter}`)
        .then((user) => user)
        .catch((error) => error);
    } else {
        return await api
        .get(`/todos`)
        .then((user) => user)
        .catch((error) => error);
    }
        
};

function* getTodoList({ payload }) {
    try {
        const todos = yield call(getTodoAsync, payload);
        if (todos) {
            yield put(getTodoSuccess(todos));
        } else {
            yield put(getTodoError(todos));
        }
    } catch (error) {
        yield put(getTodoError(error));
        return error;
    }
}

export function* watchAddTodo() {
    yield takeEvery("ADD_TODO", addTodo);
}

const addTodoAsync = async (payload) => {
    return await api
        .post(`/todos`, payload)
        .then((user) => user)
        .catch((error) => error);
};

function* addTodo({ payload }) {
    try {
        const todos = yield call(addTodoAsync, payload);
        if (todos) {
            yield put(addTodoSuccess(todos));
        } else {
            yield put(addTodoError(todos));
        }
    } catch (error) {
        yield put(addTodoError(error));
        return error;
    }
}

export function* watchDeleteTodo() {
    yield takeEvery("DELETE_TODO", deleteTodo);
}

const deleteTodoAsync = async (payload) => {
    return await api
        .delete(`/todos/${payload.id}`)
        .then((user) => user)
        .catch((error) => error);
};

function* deleteTodo({ payload }) {
    try {
        const todos = yield call(deleteTodoAsync, payload);
        if (todos) {
            yield put(deleteTodoSuccess(todos));
        } else {
            yield put(deleteTodoError(todos));
        }
    } catch (error) {
        yield put(addTodoError(error));
        return error;
    }
}

export function* watchEditTodo() {
    yield takeEvery("EDIT_TODO", editTodo);
}

const editTodoAsync = async (payload) => {
    return await api
        .put(`/todos/${payload.id}`, payload)
        .then((user) => user)
        .catch((error) => error);
};

function* editTodo({ payload }) {
    try {
        const todos = yield call(editTodoAsync, payload);
        if (todos) {
            yield put(editTodoSuccess(todos));
        } else {
            yield put(editTodoError(todos));
        }
    } catch (error) {
        yield put(addTodoError(error));
        return error;
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetTodoList),
        fork(watchAddTodo),
        fork(watchDeleteTodo),
        fork(watchEditTodo)
    ]);
}
