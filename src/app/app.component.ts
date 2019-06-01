import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Chrono is displayed?
  public chronoIsDisplayed = false;

  // Switch chronoIsDisplayed value
  switchChrono() {
    this.chronoIsDisplayed = !this.chronoIsDisplayed;
  }
}
