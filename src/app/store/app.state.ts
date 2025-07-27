import { type Todo } from "./todo-store/todo.model";

export interface AppState {
  todoList: AppStateItem<Todo[]>;
  todoItem: AppStateItem<Todo|undefined>
}

export interface AppStateItem<T> {
  data: T;
  isLoading: boolean;
  error: string;
}
