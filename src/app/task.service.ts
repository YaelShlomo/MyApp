import { Injectable } from "@angular/core";
import { Task, Priority } from "./task.model";

@Injectable()
export class taskService {
     
    getTasks(): Task[] {
        return [
            { id: 1, name: 'task1', description: "task1 description", done:true },
            { id: 2, name: 'task2', done: false, priority: Priority.High},
            { id: 3, name: 'task3', done: true},
          ]
    }
    
}