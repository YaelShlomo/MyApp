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

    getValue(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            resolve(1);
            //reject("no number found");
        });
    }

    callFunc() {
        var x: number;
        this.getValue().then((value) => {
            x = value;
        })
        console.log("after call getValue");
    }
    
}