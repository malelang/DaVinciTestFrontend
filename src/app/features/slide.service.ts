import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  itemsSlide: SlideItem[] = [
    {
      image:"url('../../assets/slide1.jpeg')"
    },
    {
      image:"url('../../assets/slide2.jpeg')"
    }
  ];

  constructor() { }

  getItemSlide(): SlideItem[] {
    return this.itemsSlide;
  }
}

export interface SlideItem {
  image:string;
}
