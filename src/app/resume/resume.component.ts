import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http';
import { GraphQlService } from '../graph-ql.service';
import {
  GET_JOBS_QUERY,
  GET_SCHOOLS_QUERY,
  GET_REFERENES_QUERY
} from '../graphql/queries';
import { FormatAddress, FormatName, Name, Address } from '../utils';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private http: HttpClient, private graphql: GraphQlService) {}

  rows: any = [];
  trail = [
    { text: 'Home', href: '/' },
    { text: 'Resume' }
  ];
  data: any = {
    jobs: {},
    schools: {},
    references: {}
  }

  formatName = (name: Name) => FormatName(name);

  formatAddress = (address: Address) => FormatAddress(address);

  print = () => {
    const container = document.getElementById('print-container');
    if (container) {
      const content = container.innerHTML
      const printWindow = window.open('', '', 'height=500, width=500');
      if (printWindow) {
        printWindow.document.write('<html>');
        printWindow.document.write('<body>');
        printWindow.document.write(content);
        printWindow.document.write('</body>');
        printWindow.document.write('<style>');
        printWindow.document.write('body { margin:0; padding: 1.5em 2em 1.5em 2em; }');
        printWindow.document.write('hr { margin: 0.25em 0 1em 0; border-top: solid black 1px; }');
        printWindow.document.write('.mb-3 { margin-bottom: 1.5em; }');
        printWindow.document.write('.new-page { page-break-after: always; }');
        printWindow.document.write('</style>');
        printWindow.document.write('</html>');
        printWindow.document.close();
        printWindow.print();
      }
    }
  }

  ngOnInit(): void {
    this.http.get(`${contentUrl}/page/${ContentUUID.Resume}/row`)
      .subscribe(result => {
        this.rows = result
      })
    this.graphql.query({ query: GET_JOBS_QUERY })
      .subscribe(result => this.data.jobs = result)
    this.graphql.query({ query: GET_SCHOOLS_QUERY })
      .subscribe(result => this.data.schools = result)
    this.graphql.query({ query: GET_REFERENES_QUERY })
      .subscribe(result => this.data.references = result)
  }

}
