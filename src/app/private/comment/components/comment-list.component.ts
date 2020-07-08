import { Component, Input } from '@angular/core';

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

const icons = {
  light: 'star_border',
  dark: 'star'
};

const classes = {
  light: 'comment__icon comment__icon--light',
  dark: 'comment__icon comment__icon--dark'
};
@Component({
  selector: 'ps-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
<<<<<<< HEAD
  @Input() comments: Comment [] = []; 
  /* getStars(score) {
    //const score = star  //hay algún modo de hacer algo así?
    const diff = 5 - score;
    return [from({length:10}, (_,i) => i <= diff ? 'black' : 'white')] 
    //función que recibe cada elemento del array y su índice
    //como elemento barra baja
=======
  @Input() comments: Comment[] = [];
  getStars(score) {
    const limit = 10;
    const diff = limit - score;
    const stars = [];
    for (let i = 0; i < limit; i++) {
      if (i < diff) {
        stars.push('light');
      } else {
        stars.push('dark');
      }
    }
    return stars;
>>>>>>> 9931285eb054b4d12b77485b6954b9a85d3614b2
  }
  getStars2(score) {
    const limit = 10;
    const diff = limit - score;
    const stars = [];
<<<<<<< HEAD
    const limt = 5;
    const diff = limt - score;
    for (let i = 0; i < limt; i++){ 
      if (i<diff) {stars.push('black')}
      else {stars.push ('white')}    
=======
    for (let i = limit - 1; i >= 0; i--) {
      const type = i < diff ? 'light' : 'dark';
      stars.push({
        icon: icons[type],
        className: classes[type]
      });
>>>>>>> 9931285eb054b4d12b77485b6954b9a85d3614b2
    }
    return stars;
  }
  getIconClasses(color) {
    return `comment__icon comment__icon--${color}`;
  }
  getIcon(color) {
    return color === 'dark' ? 'star' : 'star_border';
  }
}
// no sería más fácil decir que number es igual a icon y q se pinten???
//algo así como const score= star o algo para cambiar
//y punto
