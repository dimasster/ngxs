import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetAllTrips } from './trips.actions';
import { Trip } from './trip.model';

@State<Trip[]>({
  name: 'trips',
  defaults: []
})
@Injectable()
export class TripsState {
  @Action(GetAllTrips)
  feedAnimals(ctx: StateContext<Trip[]>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    });
  }
}