import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylicOptions } from './acrylic-options';

describe('AcrylicOptions', () => {
  let component: AcrylicOptions;
  let fixture: ComponentFixture<AcrylicOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcrylicOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcrylicOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
