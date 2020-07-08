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
  }
  getStars2(score) {
    const limit = 10;
    const diff = limit - score;
    const stars = [];
    for (let i = limit - 1; i >= 0; i--) {
      const type = i < diff ? 'light' : 'dark';
      stars.push({
        icon: icons[type],
        className: classes[type]
      });
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
