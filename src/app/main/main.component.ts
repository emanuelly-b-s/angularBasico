import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent {
  text = 'Altere aqui..';
  savedText = '';

  onClick() {
    this.savedText = this.text;
  }
  
  update(event: any) {
    this.text = event.target.value;
  }
}
