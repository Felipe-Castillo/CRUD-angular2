import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
    <input [(ngModel)]="name" #ctrl="ngModel" required>
    <input [(ngModel)]="apellido" #ctrl2="ngModel" required>

    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    <p>Value: {{ctrl.value }}</p>
    <p>ValueApellido: {{ctrl2.value }}</p>
    <button (click)="setValue()">Set value</button>
  `,
})

export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.name);
  }
  name: string = '';

   setValue() { this.name = 'Nancy'; }
}
