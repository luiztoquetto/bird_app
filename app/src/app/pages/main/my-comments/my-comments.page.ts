import { Component } from '@angular/core';
import { CommentProxy } from 'src/app/models/proxies/comment.proxy';

@Component({
  selector: 'bird-my-comments',
  templateUrl: './my-comments.page.html',
  styleUrls: ['./my-comments.page.scss'],
})

export class MyCommentsPage {
  constructor() { }

  public listComments: CommentProxy[] = [];

  public trackById(index: number, value: CommentProxy): number {
    return value.id;
  }
}
