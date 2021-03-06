import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public labels2: string[] = ['Motorola', 'Samsung', 'Apple']; 
  public data1  = [
    [10, 15, 40]
  ];

}
