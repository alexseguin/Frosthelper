import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllyDeckComponent } from './components/ally-deck/ally-deck.component';
import { LandingComponent } from './components/landing/landing.component';
import { MonsterDeckComponent } from './components/monster-deck/monster-deck.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'monster-deck', component: MonsterDeckComponent},
  {path: 'ally-deck', component: AllyDeckComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
