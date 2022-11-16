import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskDetailsFormTDComponent } from './task-details-form-td/task-details-form-td.component';
import { TaskDetailsFromMDComponent } from './task-details-from-md/task-details-from-md.component';
import { TaskService } from "./task.service";
import { AsyncAwaitDemoComponent } from "./async-await-demo/async-await-demo.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";

@NgModule({
    declarations: [AppComponent, TaskListComponent, TaskDetailsComponent, TaskDetailsFormTDComponent,
        TaskDetailsFromMDComponent, AsyncAwaitDemoComponent, ObservableDemoComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers: [TaskService],
    bootstrap: [AppComponent],

})

export class AppModule {

}