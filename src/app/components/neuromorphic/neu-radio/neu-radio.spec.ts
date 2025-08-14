import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuRadioComponent } from './neu-radio';

describe('NeuRadio', () => {
  let component: NeuRadioComponent;
  let fixture: ComponentFixture<NeuRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
