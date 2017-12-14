import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroes/heroe.component';
import {ValidationComponent} from './components/validation/validation.component';
import {Validation2Component} from './components/validation2/validation2.component';

const app_routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'validacion', component: ValidationComponent },
  { path: 'validacion2', component: Validation2Component },

  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const app_routing = RouterModule.forRoot(app_routes);
