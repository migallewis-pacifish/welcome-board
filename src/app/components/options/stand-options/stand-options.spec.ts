import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandOptions } from './stand-options';

describe('StandOptions', () => {
  let component: StandOptions;
  let fixture: ComponentFixture<StandOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
