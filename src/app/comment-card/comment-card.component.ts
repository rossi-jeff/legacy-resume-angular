import { Component, OnInit, Input } from '@angular/core';
import { FormatName } from '../utils';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input()
  comment: any
  author = ''

  setAuthor = (comment: any) => {
    if (comment) {
      if (
        comment.Admins &&
        comment.Admins.length &&
        comment.Admins[0].Name
      ) {
        this.author = FormatName(comment.Admins[0].Name);
      } else if (
        comment.References &&
        comment.References.length &&
        comment.References[0].Name
      ) {
        this.author = FormatName(comment.References[0].Name);
      } else if (
        comment.Visitors &&
        comment.Visitors.length &&
        comment.Visitors[0].Name
      ) {
        this.author = FormatName(comment.Visitors[0].Name);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.setAuthor(this.comment);
  }

}
