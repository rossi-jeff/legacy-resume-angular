import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl } from '../utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) {}

  rows: any = [];
  trail = [
    { text: 'Home', href: '/' },
    { text: 'Contact' }
  ];
  blank: any = {
    Name: {
			Salutation: '',
			First: '',
			Middle: '',
			Last: '',
			Suffix: ''
		},
		Address: {
			Address: '',
			Suite: '',
			City: '',
			State: '',
			Zip: ''
		},
		Email: '',
		EmailType: 'Work',
		Phone: '',
		PhoneType: 'Work',
		Preferred: 'Email',
		Subject: '',
		Message: ''
  }
  contact: any = {}
  salutations = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']
  emailTypes = ['Work', 'Home']
	phoneTypes = ['Work', 'Mobile', 'Home']
	prefered = ['Email', 'Phone']

  reset = () => {
    this.contact = JSON.parse(JSON.stringify(this.blank));
  }

  send = () => {
    console.log(this.contact);
  }

  ngOnInit(): void {
    this.reset();
    this.http.get(`${contentUrl}/page/${ContentUUID.Contact}/row`)
      .subscribe(result => {
        this.rows = result
      })
  }

}
