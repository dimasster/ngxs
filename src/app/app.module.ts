import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriversComponent } from './shares/drivers/drivers.component';
import { DriversState } from './shares/drivers/drivers.state';
import { TripsState } from './shares/trips/trips.state';
import { TripComponent } from './shares/trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forFeature([DriversState, TripsState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
