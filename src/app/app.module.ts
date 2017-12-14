import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {app_routing} from './app.routes';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import {HeroesService} from './services/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';
import { ValidationComponent } from './components/validation/validation.component';
import { Validation2Component } from './components/validation2/validation2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
    ValidationComponent,
    Validation2Component,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    app_routing
  ],
  providers: [
HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
