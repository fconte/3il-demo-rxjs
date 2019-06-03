import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChronoService } from 'src/app/services/chrono.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit, OnDestroy {
  public seconds = 0;
  private chronoSubscription: Subscription;

  constructor(private chronoService: ChronoService) {
    console.log('Chrono - Construction du composant');
  }

  ngOnInit() {
    this.chronoSubscription = this.chronoService.getChrono()
      .subscribe(data => {
        console.log(data);
        this.seconds = data + 1;
      });
    console.log('Chrono - Composant disponible');
  }

  ngOnDestroy(): void {
    if (this.chronoSubscription) {
      this.chronoSubscription.unsubscribe();
    }
    console.log('Chrono - Destruction du composant');
  }
}
