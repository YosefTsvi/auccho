import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car:  {id:string, model:string, price:number};
  id  : '';

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute
      .params
      .subscribe(params => {

        this.id =params['id'] || '';

        if(this.id != ''){
          this.car = this.carService.getById(this.id);
       }
    });
  }

}
