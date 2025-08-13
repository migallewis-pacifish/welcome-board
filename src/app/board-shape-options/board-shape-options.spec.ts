import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardShapeOptions } from './board-shape-options';

describe('BoardShapeOptions', () => {
  let component: BoardShapeOptions;
  let fixture: ComponentFixture<BoardShapeOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardShapeOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardShapeOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
