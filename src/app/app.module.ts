import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AviaEconomComponent } from './avia-econom/avia-econom.component';
import { AviaMiddleComponent } from './avia-middle/avia-middle.component';
import { AviaLuxeComponent } from './avia-luxe/avia-luxe.component';
import { TrainEconomComponent } from './train-econom/train-econom.component';
import { TrainMiddleComponent } from './train-middle/train-middle.component';
import { TrainLuxeComponent } from './train-luxe/train-luxe.component';

@NgModule({
  declarations: [
    AppComponent,
    AviaEconomComponent,
    AviaMiddleComponent,
    AviaLuxeComponent,
    TrainEconomComponent,
    TrainMiddleComponent,
    TrainLuxeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
