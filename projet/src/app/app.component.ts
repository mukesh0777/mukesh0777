import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarteService } from './carte.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test_beecoming';
  capitales = [
    { pays: 'France', ville: 'Paris', population:'2.1 M', lat: 48.8566, lng: 2.3522 },
    { pays: 'Royaume-Uni', ville: 'Londres', population: '9.3M', lat: 51.5074, lng: -0.1278 },
    { pays: 'États-Unis', ville: 'New York', population: '8.3M', lat: 40.7128, lng: -74.0060 },
    { pays: 'Argentine', ville: 'Buenos Aires', population: '2.8M', lat: -34.6083, lng: -58.3712 },
    { pays: 'Japon', ville: 'Tokyo', population: '13.9M', lat: 35.6895, lng: 139.6917 }
  ];

  selectedCapital: any;

  constructor(private carteService: CarteService) {
    this.carteService.setCapitales(this.capitales);
  }


}
