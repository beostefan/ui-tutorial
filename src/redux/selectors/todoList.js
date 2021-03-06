import {createSelector} from "reselect";

const getTodosInternal = state => state.todoList.todos;

export const getAmountOfTodos = createSelector(
    getTodosInternal,
    todos => todos.length
);

export const getTodos = createSelector(
    getTodosInternal,
    todos => todos
);

export const isLoading = createSelector(
    state => state.todoList.loading,
    loading => loading
);
