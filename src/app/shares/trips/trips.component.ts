import { Component } from '@angular/core';
import { TripsService } from './trips.service';
import { Trip } from './trip.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripComponent {
  trips: Trip[] = []

  private destroy = new Subject<void>();

  constructor(private stateService: TripsService){}

  ngOnInit(){
    this.stateService.tripsSub.pipe(takeUntil(this.destroy)).subscribe(trips => this.trips = trips);
  }

  ngOnDestroy(){
    this.destroy.next();
    this.destroy.complete();
  }
  
}
