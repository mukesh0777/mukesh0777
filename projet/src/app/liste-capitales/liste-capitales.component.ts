import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liste-capitales',
  templateUrl: './liste-capitales.component.html',
  styleUrls: ['./liste-capitales.component.css']
})
export class ListeCapitalesComponent {
  @Input() capitales: any[] = []; 
  @Input() selectedCapital: any;

  selectCapital(capital: any): void {
    this.selectedCapital = capital;
  }
}
