import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http';
import { GraphQlService } from '../graph-ql.service';
import { GET_LINKS_QUERY } from '../graphql/queries';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private http: HttpClient, private graphql: GraphQlService) {}

  rows: any = [];
  data: any = {};
  trail = [
    { text: 'Home', href: '/' },
    { text: 'Links' }
  ];

  ngOnInit(): void {
    this.http.get(`${contentUrl}/page/${ContentUUID.Links}/row`)
      .subscribe(result => {
        this.rows = result
      })
    this.graphql.query({ query: GET_LINKS_QUERY })
      .subscribe(result => {
        this.data = result
      })
  }

}
