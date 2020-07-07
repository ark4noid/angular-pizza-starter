import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    CommentListComponent
  ],
  imports: [
    MatExpansionModule,
    CommonModule    //para poder utilizar el *ngFor
  ],
  exports: [
    CommentListComponent
  ]
})
export class CommentListModule { }
