import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http';
import { GraphQlService } from '../graph-ql.service';
import { GET_REFERENES_QUERY } from '../graphql/queries';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  constructor(private http: HttpClient, private graphql: GraphQlService) {}

  rows: any = [];
  data: any = {};
  trail = [
    { text: 'Home', href: '/' },
    { text: 'References' }
  ];

  ngOnInit(): void {
    this.http.get(`${contentUrl}/page/${ContentUUID.References}/row`)
      .subscribe(result => {
        this.rows = result
      })
    this.graphql.query({ query: GET_REFERENES_QUERY })
      .subscribe(result => {
        this.data = result
      })
  }

}
