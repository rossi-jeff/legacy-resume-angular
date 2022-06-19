import { Component, OnInit, Input } from '@angular/core';
import { FormatAddress } from '../utils';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input()
  job: any
  address = ''

  constructor() { }

  ngOnInit(): void {
    if (this.job.Address) {
      this.address = FormatAddress(this.job.Address);
    }
  }

}
