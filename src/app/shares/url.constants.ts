import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Constants{
    private PREFIX = 'lockal...';
    public GET_ALL_TRIPS_URL: string = this.PREFIX + '/Trips/GetAll';
    public GET_ALL_DRIVERS_URL: string = this.PREFIX + '/Drivers/GetAll';
    public METHOD_URL: string = this.PREFIX + '/Drivers/Method';
}