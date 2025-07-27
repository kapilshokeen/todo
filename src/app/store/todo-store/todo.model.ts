export interface Todo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
  completedOn?: string;
  createdOn: string;
  user: {
    imageUrl: string;
    fullName: string;
  };
};

export type AddTodo = Omit<Todo, "id"|"userId"|"user">;
