import { type Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./todo/todo.routes").then(res => res.TODO_ROUTES)
  },
  {
    path: "**",
    redirectTo: ""
  }
];
