import { Component, OnInit, Input } from '@angular/core';
import { FormatAddress } from '../utils'

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent implements OnInit {
  @Input()
  school: any
  address = ''

  constructor() { }

  ngOnInit(): void {
    if (this.school.Address) {
      this.address = FormatAddress(this.school.Address)
    }
  }

}
