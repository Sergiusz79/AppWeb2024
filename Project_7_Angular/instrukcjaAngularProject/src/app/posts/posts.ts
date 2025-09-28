import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.html',
  styleUrls: ['./posts.css'],
})
export class Posts implements OnInit {
  posts$: any;
  constructor(private data: Data) {}

  ngOnInit() {
    this.data.getPosts().subscribe((data) => (this.posts$ = data));
  }
}
