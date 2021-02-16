import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CarService } from './car.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { MoveComponent } from './move/move.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'cars', component: CarsComponent, children:[
     { path: 'car', component: CarComponent }
  ]},
  {path: 'move', component: MoveComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CarComponent,
    PageNotFoundComponent,
    MoveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
