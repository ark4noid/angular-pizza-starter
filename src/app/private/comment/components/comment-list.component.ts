import { Component, Input } from "@angular/core";
import { __importDefault } from 'tslib';

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
  @Input() comments: Comment [] = []; 
  getStars(score) {
    //const score = star  //hay algún modo de hacer algo así?
    const diff = 10 - score;
    return [from({length:10}, (_,i) => i <= diff ? 'black' : 'white')] 
    //función que recibe cada elemento del array y su índice
    //como elemento barra baja
  }

 /*  getStars(score){
    const stars = [];
    const limt = 10;
    const diff = limt - score;
    for (let i = 0; i < limt; i++){ 
      if (i<diff) {stars.push('black')}
      else {stars.push ('white')}    
    }
    return stars
    } */
}
// no sería más fácil decir que number es igual a icon y q se pinten???
//algo así como const score= star o algo para cambiar
//y punto