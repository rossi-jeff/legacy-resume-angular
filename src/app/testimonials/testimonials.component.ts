import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http';
import { GraphQlService } from '../graph-ql.service';
import { GET_COMMENTS_QUERY } from '../graphql/queries';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(private http: HttpClient, private graphql: GraphQlService) {}

  rows: any = [];
  data: any = {};
  trail = [
    { text: 'Home', href: '/' },
    { text: 'Testimonials' }
  ];

  ngOnInit(): void {
    this.http.get(`${contentUrl}/page/${ContentUUID.Testimonials}/row`)
      .subscribe(result => {
        this.rows = result
      })
    this.graphql.query({ query: GET_COMMENTS_QUERY })
      .subscribe(result => {
        this.data = result
      })
  }

}
