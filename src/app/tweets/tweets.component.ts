import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[] = [
    {
      profilepic: '../../assets/profile1.jpg',
      username: 'user1',
      twitterhandele: '@user1',
      feed: 'THis is my first tweet',
      comment: 300,
      retweets: 2,
      likes: 30,
    },
    {
      profilepic: '../../assets/profile1.jpg',
      username: 'user1',
      twitterhandele: '@user1',
      feed: 'afdsadfasdfasfsadfasdfasfdsfasfsfasdfdfasfasfasfasdfasdfasdfadsfsdfsafasdfasfasdfas',
      comment: 300,
      retweets: 2,
      likes: 30,
    },
    {
      profilepic: '../../assets/profile1.jpg',
      username: 'user1',
      twitterhandele: '@user1',
      feed: 'THis is my first tweet',
      comment: 300,
      retweets: 2,
      likes: 30,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
