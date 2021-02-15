import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [NavComponent, FormComponent],
  imports: [CommonModule],
  exports: [NavComponent],
})
export class ComponentsModule {}
