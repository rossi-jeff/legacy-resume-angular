import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-row',
  templateUrl: './content-row.component.html',
  styleUrls: ['./content-row.component.css']
})
export class ContentRowComponent implements OnInit {
  @Input()
  row: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
