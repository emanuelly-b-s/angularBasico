import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css'],
})
export class ValidateCpfComponent {
  validCpf: boolean = false;
  cpf: string = '';

  @Output() valueChanged = new EventEmitter<string>();
  @Input() breakLineOnInput = true;

  protected inputType = 'text';
  protected inputStyle = 'color: black;';

  // ngOnInit(): void {
  //   this.updateInput(); // Atualizamos o inputType que aparece na tela
  // }

  protected validateCpf() {
    const cpf = this.cpf.replace(/\D/g, '');

    if (this.cpf.length !== 11) {
      this.validCpf = false;
      return;
    }

    if (/^(\d)\1+$/.test(this.cpf)) {
      this.validCpf = false;
      return;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(this.cpf.charAt(i)) * (10 - i);
    }

    let remainder = 11 - (sum % 11);
    let checkDigit1 = remainder >= 10 ? 0 : remainder;

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(this.cpf.charAt(i)) * (11 - i);
    }

    remainder = 11 - (sum % 11);
    let checkDigit2 = remainder >= 10 ? 0 : remainder;

    // Verifica se os dígitos verificadores são válidos
    if (
      checkDigit1 === parseInt(this.cpf.charAt(9)) &&
      checkDigit2 === parseInt(this.cpf.charAt(10))
    ) {
      this.validCpf = true;
    } else {
      this.validCpf = false;
    }
  }
}
