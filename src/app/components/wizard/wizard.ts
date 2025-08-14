import { Component, signal, output } from '@angular/core';

@Component({
  selector: 'app-wizard',
  imports: [],
  templateUrl: 'wizard.html',
  styleUrl: 'wizard.css'
})
export class Wizard {
  nextClick = output<void>();
  previousClick = output<void>();

  imageLayers = signal<string[]>([]);

  public selectOption(imageUrl: string): void {    
    this.imageLayers.update(layers => {
      return layers.includes(imageUrl) ? layers : [...layers, imageUrl];
    });
  }
}
