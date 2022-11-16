import { Injectable } from "@angular/core";
import { Task, Priority } from "./task.model";
const TASKS = [
    { id: 1, name: 'task1 from service', description: "task1 description", done: true },
    { id: 2, name: 'task2 from service', done: false, priority: Priority.High },
    { id: 3, name: 'task3 from service', done: true },
];
@Injectable()
export class TaskService {

    getTasks(): Task[] {
        return TASKS;
    }

    getTasksSlowly(): Promise<Task[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(TASKS);
            },5000)
        })

    }

    getValue(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 3000);
            //reject("no number found");
        });
    }

    callFunc() {
        console.log("before call getValue")
        var x: number;
        this.getValue().then((value) => {
            x = value;
            console.log("after get value from getValue function. The value is " + x);
        }).catch((err) => {
            x = 0;
            console.log(err)
        })
        console.log("after call getValue");
    }

    constructor() {
        this.callFunc();
    }

}