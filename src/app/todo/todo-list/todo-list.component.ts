import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { todoListClear, todoListFetch } from '../../store/todo-store/todo.actions';
import { todoListSelector } from '../../store/todo-store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  private store = inject(Store);

  protected todoList$ = this.store.select(todoListSelector);

  ngOnInit() {
    this.store.dispatch(todoListFetch());
  }

  ngOnDestroy() {
    this.store.dispatch(todoListClear());
  }

}
