
import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { Cours } from './composants/liste-cours/liste-cours'
@Component({
  selector: 'app-root',
  imports: [EnTete,ListeCours,PiedPage,DetailCours],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogue-cours');
   coursSelectionne: Cours | null = null;

  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }

}
