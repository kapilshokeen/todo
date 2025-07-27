import { Component } from '@angular/core';
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo-list-section',
  imports: [TodoAddComponent, TodoListComponent],
  templateUrl: './todo-list-section.component.html',
  styleUrl: './todo-list-section.component.scss'
})
export class TodoListSectionComponent {

}
