import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import type { AppState } from '../../store/app.state';
import { todoItemSelector } from '../../store/todo-store/todo.selectors';
import { todoItemComplete, todoItemFetch } from '../../store/todo-store/todo.actions';
import { tap } from 'rxjs';
import type { Todo } from '../../store/todo-store/todo.model';

@Component({
  selector: 'app-todo',
  imports: [
    CommonModule,
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  private store = inject(Store<AppState>);

  private activatedRoute = inject(ActivatedRoute);

  protected todoItem$ = this.store.select(todoItemSelector).pipe(tap(console.log));

  ngOnInit() {
    const todoId = this.activatedRoute.snapshot.params["id"];
    this.store.dispatch(todoItemFetch({payload: todoId}));
  }

  onCompleteClick(todo: Todo) {
    this.store.dispatch(
      todoItemComplete({
        payload: {
          ...todo,
          completed: true
        }
      })
    );
  }

}
