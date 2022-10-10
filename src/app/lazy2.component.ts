import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Lazy2aComponent } from './lazy2a.component';
import { Lazy2bComponent } from './lazy2b.component';

@Component({
  template: `
    <p>
      lazy2 component loaded
    </p>
  `,
  styles: [
  ]
})
export class Lazy2Component implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    // * NOTE: loading child component (lazy2a) of lazy2 component
    const componentFactoryA = this.cfr.resolveComponentFactory(Lazy2aComponent);
    this.viewContainerRef.createComponent(componentFactoryA);

    // * NOTE: loading child component (lazy2b) of lazy2 component
    const componentFactoryB = this.cfr.resolveComponentFactory(Lazy2bComponent);
    this.viewContainerRef.createComponent(componentFactoryB);
  }

}
