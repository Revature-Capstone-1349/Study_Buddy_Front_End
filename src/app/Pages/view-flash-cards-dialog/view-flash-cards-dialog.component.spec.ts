import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlashCardsDialogComponent } from './view-flash-cards-dialog.component';

describe('ViewFlashCardsDialogComponent', () => {
  let component: ViewFlashCardsDialogComponent;
  let fixture: ComponentFixture<ViewFlashCardsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlashCardsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFlashCardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
