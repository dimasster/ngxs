import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, takeUntil, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { Constants } from '../url.constants';
import { Trip } from './trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  tripsSub = new ReplaySubject<Trip[]>();

  private destroy = new Subject<void>();

  constructor(private api: ApiService, 
    private urls: Constants) {
  }

  getAll(){
    this.api.get(this.urls.GET_ALL_TRIPS_URL).pipe(
      takeUntil(this.destroy),
      tap(response => this.tripsSub.next(response))
    );
  }

  ngOnDestroy(){
    this.destroy.next();
    this.destroy.complete();
  }
}
