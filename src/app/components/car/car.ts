import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarInterface } from '../../CarInterface';

@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.html',
  styleUrl: './car.css'
})
export class Car {
  
  @Input()
  car : CarInterface = {} as CarInterface;
  
  @Output()
  saveEmitter = new EventEmitter;

  save() {
    this.saveEmitter.emit();
  }
}
