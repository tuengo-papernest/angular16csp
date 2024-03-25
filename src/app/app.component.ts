import { CSP_NONCE, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16csp';
  constructor(@Inject(CSP_NONCE) public nonce: string) {
    console.log('nonce', nonce)
  }
}
