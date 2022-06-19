import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb-trail',
  templateUrl: './bread-crumb-trail.component.html',
  styleUrls: ['./bread-crumb-trail.component.css']
})
export class BreadCrumbTrailComponent implements OnInit {
  @Input()
  trail: any

  constructor() { }

  ngOnInit(): void {
  }

}
