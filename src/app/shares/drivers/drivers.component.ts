import { Component } from '@angular/core';
import { DriversService } from './drivers.service';
import { Select } from '@ngxs/store';
import { DriversState } from './drivers.state';
import { Observable } from 'rxjs';
import { Driver } from './driver.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  @Select(DriversState) trips$!: Observable<Driver[]> 
  constructor(private stateService: DriversService){}
}
