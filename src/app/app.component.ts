import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro-projeto';
  transferencias: any[] = [];

  transferir($event: any) {
    console.log($event)
    this.transferencias.push($event);
  }

  mensagem() {
    console.log("teste")
  }

}
