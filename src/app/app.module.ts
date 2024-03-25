import { CSP_NONCE, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DOCUMENT } from '@angular/common';
import { nonceFactory } from './nonce.factory';

const nonce = nonceFactory()
// const nonce = '1234567890'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: CSP_NONCE, useValue: nonce }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(DOCUMENT) document: Document) {
    document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.setAttribute('content', `default-src 'self'; img-src 'self' data:; script-src 'self' 'nonce-${ nonce }'; style-src 'self' 'nonce-${ nonce }'`);
  }
}