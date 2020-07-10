import { NgModule } from '@angular/core';
import { PizzaDetailComponent } from './pizza-detail.component';
import { CommentFormModule } from 'src/app/private/comment/components/comment-form.module';
import { CommentListModule } from 'src/app/private/comment/components/comment-list.module';
import { PizzaDetailRoutingModule } from './pizza-detail.routing';
import { CommonModule } from '@angular/common';
import { PizzaInfoComponent } from './pizza-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [PizzaDetailComponent, PizzaInfoComponent],
  imports: [
    CommentFormModule,
    CommentListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    PizzaDetailRoutingModule,
    CommonModule
  ]
})

export class PizzaDetailModule { }
