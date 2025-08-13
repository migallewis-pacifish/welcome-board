import { Component, OnInit, signal, output, computed } from '@angular/core';
import { NeuRadioComponent } from '../components/neuromorphic/neu-radio/neu-radio';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acrylic-options',
  standalone: true,
  imports: [CommonModule, NeuRadioComponent, ReactiveFormsModule],
  templateUrl: './acrylic-options.html',
  styleUrl: './acrylic-options.css'
})
export class AcrylicOptionsComponent implements OnInit {

  acrylicOptions = signal([
    { value: 'black', label: 'Black', icon: 'path/to/black/icon.png' }, // Replace with actual paths
    { value: 'clear', label: 'Clear', icon: 'path/to/clear/icon.png' }, // Replace with actual paths
  ]);

  colorOptions = signal([
    { value: 'white', label: 'White', color: '#FFFFFF' }, // Example colors
    { value: 'red', label: 'Red', color: '#FF0000' },
    { value: 'blue', label: 'Blue', color: '#0000FF' },
    // Add more colors as needed
  ]);

  acrylicOptionsForm!: FormGroup;

  acrylicTypeChange = output<string>();
  paintedBackgroundChange = output<string | null>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.acrylicOptionsForm = this.fb.group({
      acrylicType: ['black', Validators.required],
      paintedBackground: [{ value: '', disabled: true }]
    });

    this.acrylicOptionsForm.valueChanges.subscribe(values => {
      this.acrylicTypeChange.emit(values.acrylicType);
      this.paintedBackgroundChange.emit(values.paintedBackground);
    });
  }
}
