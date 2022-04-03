import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.scss']
})
export class OperacionComponent implements OnInit {
  @Input() titulo: string = "";
  op1: number =0;
  op2:number =0;
  operacion: string = "+";
  resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setOperacion(operacion: string) {
    this.operacion = operacion ;
  }

  operar() {
    if (this.operacion == '*') {
      this.resultado = this.op1 * this.op2
    } else if (this.operacion == '+') {
      this.resultado = this.op1 + this.op2
    } else if (this.operacion == '-') {
      this.resultado = this.op1 - this.op2
    }
  }

}
