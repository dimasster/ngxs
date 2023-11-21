import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Driver } from './driver.model';
import { GetAllDrivers, Method } from './drivers.actions';

@State<Driver[]>({
  name: 'drivers',
  defaults: []
})
@Injectable()
export class DriversState {
  @Action(GetAllDrivers)
  getAllDrivers(ctx: StateContext<Driver[]>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    });
  }

  @Action(Method)
  feedAnimals(ctx: StateContext<Driver[]>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    });
  }
}