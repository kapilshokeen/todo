import type { Routes } from "@angular/router";

export const TODO_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./todo-list-section/todo-list-section.component').then(m => m.TodoListSectionComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./todo-item/todo.component').then(res => res.TodoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];