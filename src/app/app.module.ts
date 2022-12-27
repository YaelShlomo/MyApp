import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { TaskService } from "./modules/tasks/task.service";
import { AsyncAwaitDemoComponent } from "./async-await-demo/async-await-demo.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";
import { ParentLifeComponent } from "./life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./life-cycle-demo/child-life/child-life.component";
import { FormsModule } from "@angular/forms";
import { TasksModule } from "./modules/tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, AsyncAwaitDemoComponent, ObservableDemoComponent, ParentLifeComponent,
        ChildLifeComponent],
    imports: [BrowserModule, FormsModule, TasksModule],
    bootstrap: [AppComponent],

})

export class AppModule {

}