import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-column',
  templateUrl: './content-column.component.html',
  styleUrls: ['./content-column.component.css']
})
export class ContentColumnComponent implements OnInit {
  @Input()
  column: any

  constructor() { }

  ngOnInit(): void {
  }

}
