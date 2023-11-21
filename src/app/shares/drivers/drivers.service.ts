import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, takeUntil, tap } from 'rxjs';
import { Driver } from './driver.model';
import { ApiService } from '../api.service';
import { Constants } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class DriversService {  
  driversSub = new ReplaySubject<Driver[]>();

  private destroy = new Subject<void>();

  constructor(private api: ApiService, 
    private urls: Constants) {
      this.driversSub.next([{id: 1, name: 'Rostik'}])
      //replase on getAll()
  }

  getAll(){
    this.api.get(this.urls.GET_ALL_DRIVERS_URL).pipe(
      takeUntil(this.destroy),
      tap(response => this.driversSub.next(response))
    );
  }

  method(){
    this.api.get(this.urls.METHOD_URL).pipe(
      takeUntil(this.destroy),
      tap(response => /*todo*/response)
    );
  }

  ngOnDestroy(){
    this.destroy.next();
    this.destroy.complete();
  }
}
