import { Component } from '@angular/core';
import { CarInterface } from '../../CarInterface';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {

  idCount : number = 3;
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
