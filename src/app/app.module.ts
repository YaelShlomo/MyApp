import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { TaskDetailsFormTDComponent } from './task-details-form-td/task-details-form-td.component';
import { TaskDetailsFromMDComponent } from './task-details-from-md/task-details-from-md.component';

@NgModule({
    declarations: [AppComponent, TaskListComponent, TaskDetailsComponent, TaskDetailsFormTDComponent, TaskDetailsFromMDComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule ],
    bootstrap: [AppComponent],

})

export class AppModule {

}