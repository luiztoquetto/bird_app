import { TypeScriptEmitter } from '@angular/compiler';
import { Component } from '@angular/core';
import { CommentProxy } from 'src/app/models/proxies/comment.proxy';

@Component({
  selector: 'bird-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent {

  constructor() { }

  public content: CommentProxy = {
    id: 1,

    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    categoryId: 2,

    createdAt: new Date().toISOString(),

    personName: 'Leonardo Marciano',

    personEmoji: '🐼',

    personColor: '#ff565e',

    category: {
      name: 'TypeScript',

      color: '#ffc542',

      comments: [],
      
      id: 2,
    },
  }
}
