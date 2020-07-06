import { Component, Input } from "@angular/core";


@Component({
  selector: 'ps-commnent-list',
  templateUrl: '../components/comment-list.component.html',
  styleUrls:  ['../components/comment-list.component.css']
})
export class CommentListComponent {
  @Input() comments: Comment[] = []; // al declararlo con el imput [] lo voy a recibir del html private.component
}
