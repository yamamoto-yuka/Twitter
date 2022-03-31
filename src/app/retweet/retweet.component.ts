import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retweet',
  templateUrl: './retweet.component.html',
  styleUrls: ['./retweet.component.scss'],
})
export class RetweetComponent implements OnInit {
  isRetweeted: boolean = false;
  Retweet() {
    this.isRetweeted = !this.isRetweeted;
  }
  constructor() {}
  ngOnInit(): void {}
}
