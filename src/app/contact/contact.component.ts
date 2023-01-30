import { Component, OnInit } from '@angular/core';
import { ContentUUID, contentUrl, RemoveBlanks } from '../utils';
import { HttpClient } from '@angular/common/http';
import { GraphQlService } from '../graph-ql.service';
import { CREATE_CONTACT_MUTATION } from '../graphql/mutations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient, private graphql: GraphQlService) {}

  rows: any = [];
  trail = [{ text: 'Home', href: '/' }, { text: 'Contact' }];
  blank: any = {
    Name: {
      Salutation: '',
      First: '',
      Middle: '',
      Last: '',
      Suffix: '',
    },
    Address: {
      Address: '',
      Suite: '',
      City: '',
      State: '',
      Zip: '',
    },
    Email: '',
    EmailType: 'Work',
    Phone: '',
    PhoneType: 'Work',
    Preferred: 'Email',
    Subject: '',
    Message: '',
  };
  contact: any = {};
  salutations = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];
  emailTypes = ['Work', 'Home'];
  phoneTypes = ['Work', 'Mobile', 'Home'];
  prefered = ['Email', 'Phone'];
  timeout: any = null;

  reset = () => {
    this.contact = JSON.parse(JSON.stringify(this.blank));
  };

  send = () => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.graphql
        .mutate({
          mutation: CREATE_CONTACT_MUTATION,
          variables: RemoveBlanks(this.contact),
        })
        .subscribe((result) => {
          console.log(result);
          this.reset();
        });
    }, 100);
  };

  ngOnInit(): void {
    this.reset();
    this.http
      .get(`${contentUrl}/page/${ContentUUID.Contact}/row`)
      .subscribe((result) => {
        this.rows = result;
      });
  }
}
