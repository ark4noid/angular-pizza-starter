import { Component, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { FormGroup, FormControl } from '@angular/forms';
import { CommentService } from 

interface Comment {  //se llama igual que en el caso de comment-list ¿puede ser?
    id: string;
    score: number;
    text: string
};

@Component({
    selector: 'ps-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css']

})
/* export class CommentFormComponent{
     @ViewChild('form') form: NgForm;
    model : Comment = {
        id: '',
        score: '',
        text: ''
    };
    onsubmit(form){
        imput(this.module, this.form);
    }
    showCommentFormError(comment){
        return 
    }  */
export class CommentFormComponent{
    @ViewChild('form') form: FormGroup;
    @ViewChild('id') id: FormControl;
    @ViewChild('score') score: FormControl;
    @ViewChild('text') text: FormControl;

    model= {
        id: '',
        score: '',
        text: ''
    };
    errors = {
        score:{
            required: 'es necesario dar una puntuacion'
        },

        text: {
            required: 'es necesario escribir un comentario'
        },       
    };
    registerError= '';

constructor (
        private commentService: CommentService,  //¿comment-http.service? dónde stá la interface d comment-list?
        public errorService: ErrorService
    ){} //??

onSubmit() {
    if(this.form.invalid){
        return;
    }
    this.commentService.comment(this.model)
    .then(this.onCommentSucess)
    .catch(this.onCommentError);
}


}