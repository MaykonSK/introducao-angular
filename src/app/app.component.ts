import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro-projeto';
  valor: number;
  destino: number;

  transferir($event: any) {
    console.log($event)
    this.valor = $event.valor;
    this.destino = $event.destino;
  }

  exibirModalErro($event: any){
    console.log($event)
  }
}
