import { NgModule }from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';

@NgModule({
    declarations: [
        CommentListComponent
    ],
    imports: [
        CommonModule    //para poder utilizar el *ngFor
    ],
    exports: [
        CommentListComponent
    ]
})
export class CommentListModule {}
