import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'cars', component: CarsComponent, children:[
     { path: 'id', component: CarComponent }
  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];*/

@NgModule({
  imports: [
   // RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }