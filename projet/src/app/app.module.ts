import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { ListeCapitalesComponent } from './liste-capitales/liste-capitales.component';

const routes: Routes = [
  { path: 'carte', component: CarteComponent },
  { path: 'liste-capitales', component: ListeCapitalesComponent },
  { path: '', redirectTo: '/carte', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    ListeCapitalesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
