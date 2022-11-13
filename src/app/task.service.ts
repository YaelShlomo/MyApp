import { Injectable } from "@angular/core";
import { Task, Priority } from "./task.model";

@Injectable()
export class TaskService {
     
    getTasks(): Task[] {
        return [
            { id: 1, name: 'task1 from service', description: "task1 description", done:true },
            { id: 2, name: 'task2 from service', done: false, priority: Priority.High},
            { id: 3, name: 'task3 from service', done: true},
          ]
    }
    
}