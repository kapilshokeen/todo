import { createAction, props } from "@ngrx/store";
import { type AddTodo, type Todo } from "./todo.model";

export const todoAdd = createAction("[Todo Add Component] Todo Add", props<{payload: AddTodo}>());

export const todoAddSuccess = createAction("[Todo Add Component] Todo Add Success", props<{payload: Todo}>());

export const todoListFetch = createAction("[Todo List Component] Todo List Fetch", props);

export const todoListFetchSuccess = createAction("[Todo List Component] Todo Fetch Success", props<{payload: Todo[]}>());

export const todoListFetchError = createAction("[Todo List Component] Todo Fetch Error", props<{payload: string}>());

export const todoListClear = createAction("[Todo List Component] Todo Clear");

export const todoItemFetch = createAction("[Todo Item Component] Todo Fetch", props<{payload: Todo['id']}>());

export const todoItemFetchSuccess = createAction("[Todo Item Component] Todo Fetch Success", props<{payload: Todo}>());

export const todoItemFetchError = createAction("[Todo Item Component] Todo Fetch Error", props<{payload: string}>());

export const todoItemClear = createAction("[Todo Item Component] Todo Item Clear", props);

export const todoItemComplete = createAction("[Todo Item Component] Todo Item Complete", props<{payload: Todo}>());

export const todoItemCompleteSuccess = createAction("[Todo Item Component] Todo Item Complete Success", props<{payload: Todo}>());
