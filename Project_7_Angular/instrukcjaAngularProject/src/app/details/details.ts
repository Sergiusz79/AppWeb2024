import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class Details implements OnInit {
  user$: any;
  constructor(private route: ActivatedRoute, private data: Data) {
    this.route.params.subscribe((params) => (this.user$ = params));
  }

  ngOnInit() {
    this.data.getUser(this.user$.id).subscribe((data) => (this.user$ = data));
  }
}
