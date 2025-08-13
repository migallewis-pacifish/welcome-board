import { Component, ChangeDetectionStrategy, signal, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-neu-radio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './neu-radio.html',
  styleUrl: './neu-radio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NeuRadioComponent,
      multi: true
    }
  ]
})
export class NeuRadioComponent implements ControlValueAccessor {
  value = input<string>('');
  label = input<string>('');
  icon = input<string | undefined>(undefined);

  private _value: string | null = null;
  private _disabled = false;

  checked = computed(() => this._value === this.value());

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  onModelChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this._value = target.value;
    this.onChange(this._value);
  }
}
