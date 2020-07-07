import { Component, Input } from "@angular/core";

interface Comment {  //pq interface no class donde recoger todos los datos de la lista?
  user: {
    id: string,
    name: string
  };
  id: string;
  score: number;
  text: string;
  created: string;
}

@Component({
  selector: 'ps-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls:  ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input() comments: Comment [] = []; //recoge los arrays de comment pero ¿de dónde??
}
