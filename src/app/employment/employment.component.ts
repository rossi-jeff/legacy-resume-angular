import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http';
import { GraphQlService } from '../graph-ql.service';
import { GET_JOBS_QUERY } from '../graphql/queries';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  constructor(private http: HttpClient, private graphql: GraphQlService) {}

  rows: any = [];
  data: any = {};
  trail = [
    { text: 'Home', href: '/' },
    { text: 'Employment' }
  ];

  ngOnInit(): void {
    this.http.get(`${contentUrl}/page/${ContentUUID.Employment}/row`)
      .subscribe(result => {
        this.rows = result
      })
    this.graphql.query({ query: GET_JOBS_QUERY })
      .subscribe(result => {
        this.data = result
      })
  }

}
