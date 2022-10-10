import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <div>Hello Lazy Loading Component Example!! </div>
    <title>{{ title }}</title>
    <button (click)="getLazy1()">Lazy Component 1</button>
    <button (click)="getLazy2()">Lazy Component 2</button>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'lazy-component';
  
  constructor(
    private viewContainerRef: ViewContainerRef,
    // ! FIXME
    private cfr: ComponentFactoryResolver
  ){}
  

  async getLazy1(){
    this.viewContainerRef.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    // ! FIXME
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2(){
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    // ! FIXME
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }
}
