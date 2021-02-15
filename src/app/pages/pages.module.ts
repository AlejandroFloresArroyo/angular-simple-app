import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
@NgModule({
  declarations: [InicioComponent, EmpleadosComponent, GruposComponent],
  imports: [CommonModule],
  exports: [InicioComponent, EmpleadosComponent, GruposComponent],
})
export class PagesModule {}
