import { Component, output, signal, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NeuRadioComponent } from '../../neuromorphic/neu-radio/neu-radio';


@Component({
  selector: 'app-stand-options',
  imports: [ReactiveFormsModule, NeuRadioComponent],
  templateUrl: './stand-options.html',
  styleUrl: './stand-options.css'
})
export class StandOptions implements OnDestroy {
  options = signal([
    { value: 'wooden-easel', label: 'Wooden Easel', icon: '/assets/wooden_easel.png' },
    { value: 'metal-easel', label: 'Metal Easel', icon: './assets/metal_easel.png' },
    { value: 'metalic-black-frame', label: 'Metalic Black Frame', icon: './assets/black_frame.png' },
    { value: 'metalic-gold-frame', label: 'Metalic Gold Frame', icon: './assets/gold_frame.png' }
  ]);

  standSelected = output<string>();
  private formSubscription: Subscription | undefined;

  standForm = new FormGroup({
    stand: new FormControl('')
  });

  constructor() {
    this.formSubscription = this.standForm.get('stand')?.valueChanges.subscribe(value => {
      if (value) {
        console.log('Selected Stand:', value);
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
