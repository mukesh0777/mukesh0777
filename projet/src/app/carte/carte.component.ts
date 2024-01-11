import { Component, OnInit } from '@angular/core';
import { CarteService } from '../carte.service';
import './carte.component.css';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  constructor(private carteService: CarteService) { }

  ngOnInit(): void {
    this.carteService.initializeMap('map', 0, 0, 2);
    const capitales = this.carteService.getCapitales();
    
    capitales.forEach(capitale => {
      this.carteService.addMarker(capitale.lat, capitale.lng, capitale.ville, capitale.population);
    });
  }
}
