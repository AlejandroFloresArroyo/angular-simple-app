import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
