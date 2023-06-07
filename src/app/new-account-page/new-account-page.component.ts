import { Component } from '@angular/core';
import { CepService } from '../cep-service/cep.service';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css'],
})
export class NewAccountPageComponent {
  cepvalue = '';
  ruavalue = '';
  ufValue = '';
  bairroValue = '';

  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(4),
  ]);

  constructor(private cep: CepService) {}
  cepAdded() {
    this.cep.getStreet(this.cepvalue).subscribe((x) => {
      (this.ruavalue = x.logradouro),
        (this.ufValue = x.uf),
        (this.bairroValue = x.bairro);
    });
  }
}
