import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { ListeCapitalesComponent } from './liste-capitales/liste-capitales.component';

export const appRoutes: Routes = [
  { path: 'carte', component: CarteComponent },
  { path: 'liste-capitales', component: ListeCapitalesComponent },
  { path: '', redirectTo: '/carte', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
