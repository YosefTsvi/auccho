import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars = [
    {id: 'xZw1Dg', model: 'Mercedes', price: 40000},
    {id: '2AbCdE', model: 'Tesla', price: 45000},
    {id: '2hXC9E', model: 'Jaguar', price: 65000},
    {id: 'ABvD75', model: 'Sussita', price: 4500},
  ];
  constructor() { }
  
  getAll(){
    return this.cars;
  }
  
  getById(id: string){
    for(let index in this.cars){
      if(this.cars[index].id == id)
        return this.cars[index];
    }
  }

  create(newModel: string, newPrice: number){
    this.cars.push({id: this.generateId(), model: newModel, price: newPrice});
  }

  updateById(car: {id: string, model: string, price: number}){
    for(let index in this.cars){
      if(this.cars[index].id == car.id)
        this.cars[index] = car;
    }
  }

  deleteById(id: string){
    for(let index in this.cars){
      if(this.cars[index].id == id)
        this.cars.splice(parseInt(index), 1);
    }
  }

  private generateId(){
    let str = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

      for (var i = 0; i < 6; i++){
        str += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      
      return str;
  }
}
