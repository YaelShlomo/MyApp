import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AsyncAwaitDemoComponent } from "./async-await-demo/async-await-demo.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";

@NgModule({
    declarations:[AsyncAwaitDemoComponent,ObservableDemoComponent],
    imports: [CommonModule],
    exports: [AsyncAwaitDemoComponent,ObservableDemoComponent]
})

export class DemoModule {

}