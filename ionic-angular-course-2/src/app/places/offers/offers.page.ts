import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces:Place[];
  constructor(private places: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.places.places;
  }

}
