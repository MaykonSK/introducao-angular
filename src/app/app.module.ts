import { navbar } from './navbar/navbar.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    navbar
  ],
  imports: [
    BrowserModule,
    FormsModule, //API modulo de formulário
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
