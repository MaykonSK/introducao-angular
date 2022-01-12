import { Component, Output } from '@angular/core';
import { stringify } from 'querystring';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './new-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>(); //exportar dados para o front-end

  transferir() {
      var valorEmitir = {valor: this.valor, destino: this.destino} //emitir valor
      this.aoTransferir.emit(valorEmitir)
      this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
