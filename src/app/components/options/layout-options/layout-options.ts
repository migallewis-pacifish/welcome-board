import { Component, ChangeDetectionStrategy, OnInit, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NeuRadioComponent } from '../../neuromorphic/neu-radio/neu-radio';

@Component({
  selector: 'app-layout-options',
  standalone: true,
 imports: [CommonModule, ReactiveFormsModule, NeuRadioComponent],
  templateUrl: './layout-options.html',
  styleUrl: './layout-options.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutOptionsComponent implements OnInit {
  layoutForm!: FormGroup;

  layoutOptions = signal([
    { value: '2-sections', label: '2 Sections' },
    { value: '3-sections', label: '3 Sections' },
    { value: 'skewed', label: 'Skewed' },
    { value: 'straight', label: 'Straight' },
  ]);

  layoutChange = output<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.layoutForm = this.fb.group({
      layout: ['', Validators.required],
    });

    this.layoutForm.get('layout')?.valueChanges.subscribe(value => this.layoutChange.emit(value));
  }
}
