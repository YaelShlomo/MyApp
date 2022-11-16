import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
})
export class ObservableDemoComponent implements OnInit {

  source: Observable<Number> = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
    }, 3000);
    setTimeout(() => {
      observer.next(5);
    }, 1000);
    //observer.complete();
    observer.error("Error from observerable");
  });

  x: Number;

  constructor() {
    this.source.subscribe(
      (value) => { //כאן כותבים מה יקרה כאשר יגיע מידע חדש
        this.x = value;
        console.log("Observable next is:" + value);
      },
      (err) => {
        console.log("Error from observerable" + err);
      },
      () => {
        this.x = 0;
        console.log("Observable is completed!")
      });
  }

  ngOnInit(): void {
  }

}
