import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 title = 'גדולי הרבנים שליט"א מנהיגי דורינו';
 rabonim1: string;
 rabonim2: string;
 rabonim3: string;
 rabonim4: string;
 rabonim5: string;
 rabonim6: string;
@Output() yeter = new EventEmitter <{x:string}>();
  constructor() { }

  ngOnInit(): void {
  }
  getYtro(x) {
    this.yeter.emit(x.value);
  }
}

