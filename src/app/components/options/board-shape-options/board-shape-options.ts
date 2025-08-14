import { Component, ChangeDetectionStrategy, signal, effect, input, output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NeuRadioComponent } from '../../neuromorphic/neu-radio/neu-radio';
@Component({
  selector: 'app-board-shape-options',
  standalone: true,
 imports: [CommonModule, ReactiveFormsModule,NeuRadioComponent],
  templateUrl: './board-shape-options.html',
  styleUrl: './board-shape-options.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardShapeOptionsComponent implements OnInit {
  shapeOptions = signal([
      { value: 'Arc', label: 'Arc' },
      { value: 'Rectangle', label: 'Rectangle' },
  ]);

  orientationOptions = signal([
      { value: 'Portrait', label: 'Portrait' },
      { value: 'Landscape', label: 'Landscape' },
  ]);

  boardShapeForm!: FormGroup;

  // Inputs for pre-selecting options (optional)
  initialShape = input<string | null>(null);
  initialOrientation = input<string | null>(null);

  shapeChange = output<string>();
  orientationChange = output<string | null>();

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.boardShapeForm = this.fb.group({
      shape: ['Arc', Validators.required],
      orientation: [{ value: '', disabled: true }]
    });
    effect(() => {
      this.shapeChange.emit(this.boardShapeForm.controls['shape'].value!);
      this.orientationChange.emit(this.boardShapeForm.controls['orientation'].value);
    });
    this.setOrientation();
  }

  setOrientation(): void {
    this.boardShapeForm.controls['shape'].valueChanges.subscribe(shape => {
      if (shape === 'Rectangle') {
        this.boardShapeForm.controls['orientation'].enable();
      } else {
        this.boardShapeForm.controls['orientation'].disable();
        this.boardShapeForm.controls['orientation'].patchValue(''); 
      }
    });
  }
}