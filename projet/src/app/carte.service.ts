import { Injectable, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  private map!: L.Map;
  private capitales: any[] = [];
  markerClickEvent: EventEmitter<any> = new EventEmitter<any>();

  initializeMap(elementId: string, lat: number, lng: number, zoom: number): void {
    this.map = L.map(elementId).setView([lat, lng], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  setCapitales(capitales: any[]): void {
    this.capitales = capitales;
  }

  getCapitales(): any[] {
    return this.capitales;
  }


  addMarker(lat: number, lng: number, title: string, population: number): void {
    const marker = L.marker([lat, lng]).addTo(this.map)
      .bindPopup(`${title}<br>Population: ${population}`);
    
    marker.on('click', () => {
      this.markerClickEvent.emit({ title, population });
    });
  }

  clearMarkers(): void {
    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
  }
}
