import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-row',
  templateUrl: './link-row.component.html',
  styleUrls: ['./link-row.component.css']
})
export class LinkRowComponent implements OnInit {
  @Input()
  link: any

  constructor() { }

  ngOnInit(): void {
  }

}
