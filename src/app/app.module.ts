import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { NavComponent } from './components/nav/nav.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpleadosComponent,
    GruposComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
