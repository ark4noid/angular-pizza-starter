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
  selector: 'ps-commnent-list',
  templateUrl: '../components/comment-list.html',
  styleUrls:  ['../components/comment-list.css']
})
export class CommentListComponent {
  @Input() comments: Comment[] = [];
}
