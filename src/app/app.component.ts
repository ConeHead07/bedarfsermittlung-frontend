import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  public onActivate(event: any): void {
    console.log('#12 app.component.ts onActivate', { event });
  }
}
