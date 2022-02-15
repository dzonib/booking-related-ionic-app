import { Place } from './../models/place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private placesData: Place[] = [
    {
      id: 'p1',
      title: 'Manhaten',
      description: 'In the heart of NYC',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://media.istockphoto.com/photos/hand-using-laptop-and-press-screen-to-search-browsing-on-the-internet-picture-id1271072224?s=612x612',
      price: 432.99,
    },
    {
      id: 'p2',
      title: 'Moon',
      description: 'In the space',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://media.istockphoto.com/photos/hands-on-laptop-keyboard-picture-id535412512?s=612x612',
      price: 221.9,
    },
    {
      id: 'p3',
      title: 'Draculas castle',
      description: 'In the Romonia',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://media.istockphoto.com/photos/hands-on-laptop-keyboard-picture-id535412512?s=612x612',
      price: 132.19,
    },
  ];

  constructor() {}

  get places() {
    return [...this.placesData];
  }
}
