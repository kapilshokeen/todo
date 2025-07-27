import { createReducer, on } from "@ngrx/store";
import { type Todo } from "./todo.model";
import { todoAddSuccess, todoItemClear, todoItemComplete, todoItemCompleteSuccess, todoItemFetch, todoItemFetchError, todoItemFetchSuccess, todoListClear, todoListFetch, todoListFetchError, todoListFetchSuccess } from "./todo.actions";
import type { AppStateItem } from "../app.state";

const INITIAL_STATE: AppStateItem<Todo[]> = {
  isLoading: false,
  error: '',
  data: []
};

const INITIAL_ITEM_STATE: AppStateItem<Todo|undefined> = {
  isLoading: false,
  error: '',
  data: undefined
};

export const todoListReducer = createReducer<AppStateItem<Todo[]>>(
  INITIAL_STATE,
  on(todoListFetch, state => ({
    ...state,
    isLoading: true,
    error: ''
  })),
  on(todoListFetchSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: '',
    data: action.payload
  })),
  on(todoListFetchError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload
  })),
  on(todoListClear, state => ({
    ...state,
    isLoading: false,
    error: '',
    data: []
  })),
  on(todoAddSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: '',
    data: [ action.payload, ...state.data]
  })),
  on(todoItemCompleteSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: '',
    data: [...state.data.map(item => (
      item.id == action.payload.id ? action.payload : item
    ))]
  }))
);

export const todoItemReducer = createReducer<AppStateItem<Todo|undefined>>(
  INITIAL_ITEM_STATE,
  on(todoItemFetch, state => ({
    ...state,
    error: '',
    isLoading: true,
  })),
  on(todoItemFetchSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: '',
    data: action.payload
  })),
  on(todoItemFetchError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload
  })),
  on(todoItemClear, state => ({
    ...state,
    isLoading: false,
    error: '',
    data: undefined
  })),
  on(todoItemComplete, state => ({
    ...state,
    isLoading: true,
    error: ''
  })),
  on(todoItemCompleteSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: '',
    data: action.payload
  }))
);
