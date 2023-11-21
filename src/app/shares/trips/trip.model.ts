import { Driver } from "../drivers/driver.model"

export type Trip = {
    id: number,
    driver: Driver,
    time: Date
}