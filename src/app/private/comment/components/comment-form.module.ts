import { NgModule } from '@angular/core';
import { CommentFormComponent } from './comment-form.component';

@NgModule({
    declarations: [     //elemento del modulo
        CommentFormComponent,
    ],
    imports:[],
    
    exports: [
        CommentFormComponent,   // para poder usarlo desde fuera del modulo
    ],
})
export class CommentFormModule {}