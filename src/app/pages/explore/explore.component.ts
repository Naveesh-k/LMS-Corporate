import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  hide: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  // slider
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  // hide show section
  showHide() {
    this.hide = false;
  }
}
