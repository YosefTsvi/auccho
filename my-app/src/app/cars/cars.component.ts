import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    cars: Array<{id:string, model:string, price:number}>;
  
    constructor(private router:Router, private carService: CarService) { }
  
    ngOnInit() {
      this.getCars();
    }
             
    getCars(){
      this.cars = this.carService.getAll();
    }
  
    loadCar(id: string){
      this.router.navigate(['/cars',id]);
    }

}
