import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ParentLifeComponent } from "./life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./life-cycle-demo/child-life/child-life.component";
import { FormsModule } from "@angular/forms";
import { TasksModule } from "./modules/tasks/tasks.module";
import { DemoModule } from "./modules/demo/demo.module";
import { TaskListComponent } from "./modules/tasks/task-list/task-list.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";

const APP_ROUTES: Route[] = [
    {path: "", redirectTo: "home"},
    {path: "home", component: HomeComponent},
    {path: "tasks", component: TaskListComponent},
    {path: "users", component: UsersComponent}
]
@NgModule({
    declarations: [AppComponent, ParentLifeComponent,
        ChildLifeComponent],
    imports: [BrowserModule, FormsModule, TasksModule, DemoModule, RouterModule.forRoot(APP_ROUTES)],
    bootstrap: [AppComponent],

})

export class AppModule {

};