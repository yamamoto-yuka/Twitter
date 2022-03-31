import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  isLiked = false;
  like() {
    // Only works bolean, two options
    this.isLiked = !this.isLiked;
    //if(this.isLiked) {
    //   this.isLiked = false;
    // } else this.isLiked = true;
    // }
  }
  constructor() {}
  ngOnInit(): void {}
}
