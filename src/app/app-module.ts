import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Car } from './components/car/car';
import { Cars } from './components/cars/cars';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Car,
    Cars
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
