import { type AppState } from "../app.state";

export const todoListSelector = (state: AppState) => state.todoList;

export const todoItemSelector = (state: AppState) => state.todoItem;
