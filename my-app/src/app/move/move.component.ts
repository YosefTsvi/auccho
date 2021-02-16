import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  top = 100;
  left = 0;
  count = 0;
  countRight = 0;
  countLeft = 0;
  padding = 7;

  constructor() { }

  ngOnInit(): void {
  }

  moveBall(top: number, left: number): void {
    this.count += 1;
    this.countLeft +=1;
    if (this.count % 10 > 5 && this.count % 10 < 10 || this.count % 10 == 0) {
      this.top -= top;
    } else {
      this.top += top;
    }
    this.left += left;
  }
  moveReturn(top: number, left: number): void {
    this.count += 1;
    this.countRight += 1;
    if (this.count % 10 > 5 && this.count % 10 < 10 || this.count % 10 == 0) {
      this.top -= top;
    } else {
      this.top += top;
    }
    this.left -= left;
  }

}
