import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TaskListComponent } from "./modules/tasks/task-list/task-list.component";
import { PageNotFounfComponent } from "./page-not-founf/page-not-founf.component";
import { UsersComponent } from "./users/users.component";

const APP_ROUTES: Route[] = [
    {path: "", redirectTo: "home", pathMatch:"full"},
    // {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "tasks", component: TaskListComponent},
    {path: "tasks/:id", component: TaskListComponent},
    {path: "users", component: UsersComponent},
    {path: "**", component: PageNotFounfComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}