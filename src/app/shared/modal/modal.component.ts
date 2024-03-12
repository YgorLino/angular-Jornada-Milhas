import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  
  quantidade:number = 0

  constructor(){}

  Adicionar() {
    this.quantidade = this.quantidade + 1
  }

  Subtrair(){
    this.quantidade = this.quantidade - 1
    this.VerificaQuantidade()
  }

  VerificaQuantidade(){
    if(this.quantidade <0){
      this.quantidade = 0
    }
  }
  
}
