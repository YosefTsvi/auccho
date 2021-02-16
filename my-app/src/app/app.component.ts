import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  changeVal(){};
  constructor() {}
 
  text = "שלח";
  active = true;

  rabonim: string='';


  clicked($event) {
    this.text = "נשלח";
    this.active = false;
    console.log($event);
  }
  ytroName = [
    'yeter', 'ytro', 'putiel', 'keiny', 'hovav', 'reuel'
      ];
}
  
  