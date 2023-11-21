import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetAllDrivers, Method } from './drivers.actions';

@Injectable({
  providedIn: 'root'
})
export class DriversService {  
  constructor(private store: Store) {
    this.store.dispatch([]);
  }

  getAll(){
    this.store.dispatch(new GetAllDrivers());
  }

  method(){
    this.store.dispatch(new Method());
  }
}
