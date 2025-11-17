import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initSwiperPagination();
  }
  initSwiperPagination() {
    const target = document.querySelector('.swiper-pagination-js');
    const swiper = new Swiper(target, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
new Main();
