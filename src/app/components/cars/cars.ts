import { Component } from '@angular/core';
import { CarInterface } from '../../CarInterface';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {

  idCount : number = 4;
  isUpdate : boolean = false;
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
    },
    {
      id: 3,
      name: "320i",
      automaker: "BMW",
      price:250000,
      year: 2020
    }
  ]

  saveCar() {
    if(!this.isUpdate) {
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
    }

    this.car = {} as CarInterface;
    this.isUpdate = false;
  }

  update(selectedCar : CarInterface) {
    this.car = selectedCar;
    this.isUpdate = true;
  }

  remove(selectedCar : CarInterface) {

  }

  
}
