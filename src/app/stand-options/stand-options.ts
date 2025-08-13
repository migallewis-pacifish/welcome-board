import { Component, output, signal, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NeuRadioComponent } from '../components/neuromorphic/neu-radio/neu-radio';


@Component({
  selector: 'app-stand-options',
  imports: [ReactiveFormsModule, NeuRadioComponent],
  templateUrl: './stand-options.html',
  styleUrl: './stand-options.css'
})
export class StandOptions implements OnDestroy {
  options = signal([
    { value: 'wooden-easel', label: 'Wooden Easel', icon: './assets/portable.svg' },
    { value: 'metal-easel', label: 'Metal Easel', icon: './assets/convertible.svg' },
    { value: 'metalic-black-frame', label: 'Metalic Black Frame', icon: './assets/tabletop.svg' },
    { value: 'metalic-gold-frame', label: 'Metalic Gold Frame', icon: './assets/tabletop.svg' }
  ]);

  standSelected = output<string>();
  private formSubscription: Subscription | undefined;

  standForm = new FormGroup({
    stand: new FormControl('')
  });

  constructor() {
    this.formSubscription = this.standForm.get('stand')?.valueChanges.subscribe(value => {
      if (value) {
        this.standSelected.emit(value);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }
}
