import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuRadio } from './neu-radio';

describe('NeuRadio', () => {
  let component: NeuRadio;
  let fixture: ComponentFixture<NeuRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuRadio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuRadio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
