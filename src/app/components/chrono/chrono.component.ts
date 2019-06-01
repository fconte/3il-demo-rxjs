import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit, OnDestroy {
  public seconds = 0;

  constructor() {
    console.log('Chrono - Construction du composant');
  }

  ngOnInit() {
    console.log('Chrono - Composant disponible');
  }

  ngOnDestroy(): void {
    console.log('Chrono - Destruction du composant');
  }
}
