import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.css']
})
export class LinkTableComponent implements OnInit {
  @Input()
  links: any

  constructor() { }

  ngOnInit(): void {
  }

}
