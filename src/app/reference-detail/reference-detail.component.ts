import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphQlService } from '../graph-ql.service';
import { SHOW_REFERENCE_QUERY } from '../graphql/queries';
import { FormatAddress, FormatName, Name, Address, ITrail } from '../utils';

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.css']
})
export class ReferenceDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private graphql: GraphQlService) {}

  UUID: any;
  data: any = {};
  reference: any = {};
  trail: ITrail[] = [
    { text: 'Home', href: '/' },
    { text: 'References', href: '/references' }
  ];

  formatName = (name: Name) => FormatName(name);

  formatAddress = (address: Address) => FormatAddress(address);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.UUID = params.get('uuid');
    });
    this.graphql.query({
      query: SHOW_REFERENCE_QUERY,
      variables: { UUID: this.UUID }
    }).subscribe(result => {
      this.data = result;
      this.reference = this.data.showReference;
      if (this.trail.length === 2) {
        this.trail.push({ text: FormatName(this.reference.Name) })
      }
    });
  }

}
