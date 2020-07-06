import { Component, Input } from "@angular/core";

interface Comment {
  id: string;
  text: string;
  created: string;
  score: number;
  user: {
    id: string,
    name: string
  };
}
@Component({
  selector: 'ps-commnet-list'
})
export class CommentListComponent {
  @Input() comments: Comment[] = [];
}
