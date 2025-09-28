import { Component } from '@angular/core';
import { Data } from '../data';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  users$: any;
  constructor(private data: Data) {}
  ngOnInit() {
    this.data.getUsers().subscribe((data) => (this.users$ = data));
  }
}
