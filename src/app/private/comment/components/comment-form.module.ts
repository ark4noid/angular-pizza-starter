import { NgModule } from '@angular/core';
import { CommentFormComponent } from './comment-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatorsModule } from 'src/app/core/validation/validators.module';

@NgModule({
  declarations: [     //elemento del modulo
    CommentFormComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    ValidatorsModule
  ],
  exports: [
    CommentFormComponent,   // para poder usarlo desde fuera del modulo
  ],
})
export class CommentFormModule {}
