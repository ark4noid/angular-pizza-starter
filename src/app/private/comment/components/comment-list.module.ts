import { NgModule }from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        CommentListComponent
    ],
    imports: [
        CommonModule,    //para poder utilizar el *ngFor  y las pipes de las fechas
        MatExpansionModule,
        MatIconModule,
    ],
    exports: [
        CommentListComponent
    ]
})
export class CommentListModule {}

/* import {MatExpansionModule} from '@angular/material/expansion'; */