import { Component, OnInit } from '@angular/core';
import { Priority, Task } from '../task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  priority = Priority;

  tasks: Task[] = [
    { id: 1, name: 'task1', description: "task1 description", done:true },
    { id: 2, name: 'task2', done: false, priority: Priority.High},
    { id: 3, name: 'task3', done: true},
  ];

  selectedTask: Task;

  deleteTask(task: Task) {
    let indexToDelete = this.tasks.indexOf(task);
    this.tasks.splice(indexToDelete, 1);
  }

  showNewTaskDetails() {
    console.log("showNewTaskDetails")
    this.selectedTask = new Task();
  }

  addNewTaskToList(taskToAdd: Task) {
    console.log("addNewTaskToList")
    this.tasks.push(taskToAdd);
    //this.selectedTask = null;
  }

  saveTaskToList(taskToSave: Task) {
    console.log(JSON.stringify(taskToSave));
    console.log("saveTaskToList");
    if (taskToSave.id == 0 ) {
      taskToSave.id = this.tasks.length + 1;
      this.tasks.push(taskToSave);
    }
    else {
      let taskToUpdate = this.tasks.filter(x => x.id == taskToSave.id)[0];
      let index = this.tasks.indexOf(taskToUpdate);
      this.tasks[index] = taskToSave;
    }
    //this.selectedTask.name="";
    //this.selectedTask.description="";
    //this.selectedTask.id=0;
    //this.selectedTask = null;
  }
  

  showHelp() {
    alert("Do you need help?");
  }

  showAdv() {
    // alert("adv"); 
  }

  btnClick(e: any) {
    
  }

  search(str: string) {
  }

  showDetails(taskToShow: Task) {
    this.selectedTask = taskToShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

}