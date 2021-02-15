import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {}
