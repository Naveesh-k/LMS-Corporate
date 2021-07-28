import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  hide: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  // slider
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  hideShow() {
    this.hide = true;
  }
}
