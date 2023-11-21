import { Component } from '@angular/core';
import { DriversService } from './drivers.service';
import { Driver } from './driver.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  drivers: Driver[] = []

  private destroy = new Subject<void>();

  constructor(private stateService: DriversService){}

  ngOnInit(){
    this.stateService.driversSub.pipe(takeUntil(this.destroy)).subscribe(drivers => this.drivers = drivers);
  }

  ngOnDestroy(){
    this.destroy.next();
    this.destroy.complete();
  }
}
