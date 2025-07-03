import { Component } from '@angular/core';
import { CarInterface } from '../../CarInterface';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {

  car : CarInterface = {} as CarInterface;

  cars : CarInterface[] = [
    {
      id: 1,
      name: "Corolla",
      automaker: "Toyota",
      price:100000,
      year: 2013
    },
    {
      id: 2,
      name: "Civic",
      automaker: "Honda",
      price:100000,
      year: 2012
    }
  ]

}
