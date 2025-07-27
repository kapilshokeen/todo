import { inject, Injectable } from '@angular/core';
import { APIService } from './api.service';
import { type AddTodo, type Todo } from '../store/todo-store/todo.model';
import { exhaustMap, map } from 'rxjs';
import { fakerEN as faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private BASE_URL = "https://jsonplaceholder.typicode.com/";

  private BASE_URL = "http://localhost:3000/";

  private apiService = inject(APIService);

  private readonly user = {
    userId: faker.number.int(),
    imageUrl: faker.image.avatar(),
    fullName: faker.person.fullName()
  }

  fetchTodoList() {
    return this.apiService.get<Todo[]>(`${this.BASE_URL}todos`).pipe(
      map(res => res.map(
        item => ({
          ...item,
          user: { ...this.user }
        })
      ))
    );
  }

  addTodo(addTodo: AddTodo) {
    return this.apiService.post<{id: string}>(`${this.BASE_URL}todos`, addTodo).pipe(
      exhaustMap(res => this.fetchTodo(res.id))
    );
  }

  fetchTodo(todoId: string) {
    return this.apiService.get<Todo>(`${this.BASE_URL}todos/${todoId}`).pipe(
      map(res => ({
        ...res,
        user: { ...this.user }
      }))
    );
  }

  updateTodo(todo: Partial<Todo>) {
    return this.apiService.patch<Todo>(`${this.BASE_URL}todos/${todo.id}`, todo).pipe(
      map(res => ({
        ...res,
        user: { ...this.user }
      }))
    );
  }

}
