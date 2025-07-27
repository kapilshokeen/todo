import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { todoAdd, todoAddSuccess, todoItemComplete, todoItemCompleteSuccess, todoItemFetch, todoItemFetchSuccess, todoListFetch, todoListFetchSuccess } from "./todo.actions";
import { exhaustMap, map } from "rxjs";
import { TodoService } from "../../services/todo.service";

@Injectable()
export class TodoEffects {

  private actions$ = inject(Actions);

  private todoService = inject(TodoService);

  fetchTodoList$ = createEffect(() => (
    this.actions$.pipe(
      ofType(todoListFetch),
      exhaustMap(() => (
        this.todoService.fetchTodoList().pipe(
          map(res => todoListFetchSuccess({ payload: res }))
        )
      ))
    )
  ));

  addTodo$ = createEffect(() => (
    this.actions$.pipe(
      ofType(todoAdd),
      exhaustMap(action => (
        this.todoService.addTodo(action.payload).pipe(
          map(res => todoAddSuccess({ payload: res }))
        )
      ))
    )
  ));

  fetchTodoItem$ = createEffect(() => (
    this.actions$.pipe(
      ofType(todoItemFetch),
      exhaustMap((action) => (
        this.todoService.fetchTodo(action.payload).pipe(
          map(res => todoItemFetchSuccess({ payload: res }))
        )
      ))
    )
  ));

  updateTodoItem$ = createEffect(() => (
    this.actions$.pipe(
      ofType(todoItemComplete),
      exhaustMap((action) => (
        this.todoService.updateTodo({
          id: action.payload.id,
          completed: true,
          completedOn: new Date().toJSON()
        }).pipe(
          map(res => todoItemCompleteSuccess({ payload: res }))
        )
      ))
    )
  ));

}
