import { Component, OnInit, Input } from '@angular/core';
import { FormatAddress, FormatName } from '../utils'

@Component({
  selector: 'app-contact-confirm',
  templateUrl: './contact-confirm.component.html',
  styleUrls: ['./contact-confirm.component.css']
})
export class ContactConfirmComponent implements OnInit {
  @Input()
  contact: any;

  name = ''
  address = ''

  constructor() { }

  getName = () => {
    return FormatName(this.contact.Name);
  }

  getAddress = () => {
    return FormatAddress(this.contact.Address);
  }

  ngOnInit(): void {
  }

}
