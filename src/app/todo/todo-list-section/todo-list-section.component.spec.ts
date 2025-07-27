import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSectionComponent } from './todo-list-section.component';

describe('TodoListSectionComponent', () => {
  let component: TodoListSectionComponent;
  let fixture: ComponentFixture<TodoListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
