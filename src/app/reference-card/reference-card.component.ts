import { Component, OnInit, Input } from '@angular/core';
import { FormatAddress, FormatName } from '../utils';

@Component({
  selector: 'app-reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.css']
})
export class ReferenceCardComponent implements OnInit {
  @Input()
  reference: any
  name = ''
  address = ''

  constructor() { }

  ngOnInit(): void {
    if (this.reference.Name) {
      this.name = FormatName(this.reference.Name)
    }
    if (this.reference.Address) {
      this.address = FormatAddress(this.reference.Address)
    }
  }

}
