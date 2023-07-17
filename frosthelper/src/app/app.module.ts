import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllyDeckModule } from './components/ally-deck/ally-deck.module';
import { HeaderModule } from './components/header/header.module';
import { LandingModule } from './components/landing/landing.module';
import { MonsterDeckModule } from './components/monster-deck/monster-deck.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LandingModule,
    AllyDeckModule,
    MonsterDeckModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
