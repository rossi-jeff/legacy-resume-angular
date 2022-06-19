import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  rows: any = [];
  trail = [
    { text: 'Home' }
  ]

  ngOnInit(): void {
    this.http.get(`${contentUrl}/page/${ContentUUID.Home}/row`)
      .subscribe(result => {
        this.rows = result
      })
  }
}
