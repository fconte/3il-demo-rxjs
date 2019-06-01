import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChronoService {

  // Chrono observable
  private chrono: Observable<number>;

  // Constructor
  constructor() {
    // Create chrono observable (emit increment each second)
    this.chrono = interval(1000);
  }

  // Return chrono observable
  public getChrono(): Observable<number> {
    return this.chrono;
  }
}
