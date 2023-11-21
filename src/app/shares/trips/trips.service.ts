import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetAllTrips } from './trips.actions';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  constructor(private store: Store) { 
    this.store.dispatch([])
  }

  getAll(){
    this.store.dispatch(new GetAllTrips());
  }

}
