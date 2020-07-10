import { Component, Input, ViewChild } from '@angular/core';
import { CommentService } from '../services/commnet-http.service';
import { NgForm } from '@angular/forms';
import { ErrorsService } from 'src/app/core/validation/errors.service';

@Component({
  selector: 'ps-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
  providers: [CommentService]
})
export class CommentFormComponent {
  @ViewChild('form') form: NgForm;
  @Input() pizza = '';
  model = {
    text: '',
    score: ''
  };
  errors = {
    text: {
      required: 'El texto es requerido'
    },
    score: {
      required: 'La puntuación es requerida',
      min: 'La puntuación debe ser igual o mayor a 0',
      max: 'La puntuación debe ser menor que 10'
    }
  };
  constructor(private commentService: CommentService, public errorsService: ErrorsService) { }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.commentService.create({
      pizza: this.pizza,
      ...this.model
    }).then(() => {
      this.form.resetForm();
    });
  }
}
