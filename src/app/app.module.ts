import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriversComponent } from './shares/drivers/drivers.component';
import { TripComponent } from './shares/trips/trips.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shares/api.service';
import { Constants } from './shares/url.constants';
import { TripsService } from './shares/trips/trips.service';
import { DriversService } from './shares/drivers/drivers.service';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
