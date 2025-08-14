import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOptions } from './layout-options';

describe('LayoutOptions', () => {
  let component: LayoutOptions;
  let fixture: ComponentFixture<LayoutOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
