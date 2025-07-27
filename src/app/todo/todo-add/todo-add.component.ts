import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { todoTitleValidators } from '../todo.validators';
import { Store } from '@ngrx/store';
import type { AppState } from '../../store/app.state';
import { todoAdd, todoAddSuccess } from '../../store/todo-store/todo.actions';
import type { AddTodo } from '../../store/todo-store/todo.model';
import { Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {

  private destroyRef = inject(DestroyRef);

  private store = inject(Store<AppState>);

  private actions$ = inject(Actions);

  titleControl = new FormControl<string>('', [...todoTitleValidators]);

  ngOnInit() {
    const sub = this.actions$.pipe(
      ofType(todoAddSuccess),
      tap(() => {
        this.titleControl.reset('');
      })
    ).subscribe();

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  onSubmit() {
    if (this.titleControl.valid) {
      const todo: AddTodo = {
        completed: false,
        title: this.titleControl.value?.trim() ?? '',
        createdOn: new Date().toJSON()
      };
      this.store.dispatch(todoAdd({payload: todo}));
    }
  }

}
