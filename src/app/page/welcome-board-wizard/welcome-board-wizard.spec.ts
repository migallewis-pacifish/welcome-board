import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBoardWizard } from './welcome-board-wizard';

describe('WelcomeBoardWizard', () => {
  let component: WelcomeBoardWizard;
  let fixture: ComponentFixture<WelcomeBoardWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeBoardWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeBoardWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
