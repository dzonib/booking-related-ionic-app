import { PlacesService } from './../../../services/places.service';
import { Place } from './../../../models/place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    console.log('bla');
    this.loadedPlaces = this.placesService.places;
    console.log('PLACES', this.loadedPlaces);
  }
}
