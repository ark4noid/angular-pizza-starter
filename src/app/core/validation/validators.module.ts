import { NgModule } from '@angular/core';
import { MinDirective } from './min.validator';
import { MaxDirective } from './max.validator';

// exponer los validadores comunes en mi aplicación
@NgModule({
  declarations: [MinDirective, MaxDirective],
  exports: [MinDirective, MaxDirective]
})
export class ValidatorsModule {}
