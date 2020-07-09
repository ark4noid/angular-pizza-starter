import { NgModule } from '@angular/core';
import { CommentFormComponent } from './comment-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [     //elemento del modulo
        CommentFormComponent,
    ],
    imports:[
        MatFormFieldModule,
        MatInputModule
    ],
    
    exports: [
        CommentFormComponent,   // para poder usarlo desde fuera del modulo
    ],
})
export class CommentFormModule {
}