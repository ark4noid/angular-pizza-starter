import { NgModule } from '@angular/core';
import { PizzaDetailComponent } from './pizza-detail.component';
import { CommentFormModule } from 'src/app/private/comment/components/comment-form.module';
import { CommentListModule } from 'src/app/private/comment/components/comment-list.module';
import { PizzaDetailRoutingModule } from './pizza-detail.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PizzaDetailComponent],
    imports: [
      CommentFormModule,
      CommentListModule,
      PizzaDetailRoutingModule,
      CommonModule
    ]
})

export class PizzaDetailModule {}
