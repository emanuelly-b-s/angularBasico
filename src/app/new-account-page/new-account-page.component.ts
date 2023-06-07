import { Component } from '@angular/core';
import { CepService } from '../cep-service/cep.service';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css'],
})
export class NewAccountPageComponent {
  cepvalue = '';
  ruavalue = '';
  constructor(private cep: CepService) {}
  cepAdded() {
    this.cep.getStreet(this.cepvalue);
  }
}
