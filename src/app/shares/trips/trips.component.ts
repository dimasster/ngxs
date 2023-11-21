import { Component } from '@angular/core';
import { TripsService } from './trips.service';
import { Select } from '@ngxs/store';
import { TripsState } from './trips.state';
import { Observable } from 'rxjs';
import { Trip } from './trip.model';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripComponent {
  @Select(TripsState) trips$!: Observable<Trip[]> 
  constructor(private stateService: TripsService){}
}
