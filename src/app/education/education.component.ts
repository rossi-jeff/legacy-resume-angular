import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http'
import { GraphQlService } from '../graph-ql.service';
import { GET_SCHOOLS_QUERY } from '../graphql/queries';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private http: HttpClient, private graphql: GraphQlService) {}

  rows: any = [];
  data: any = {};
  trail = [
    { text: 'Home', href: '/' },
    { text: 'Education' }
  ];

  ngOnInit(): void {
    this.http.get(`${contentUrl}/page/${ContentUUID.Education}/row`)
      .subscribe(result => {
        this.rows = result
      })
    this.graphql.query({ query: GET_SCHOOLS_QUERY })
      .subscribe(result => {
        this.data = result
      })
  }

}
