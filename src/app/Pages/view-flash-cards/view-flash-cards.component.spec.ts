import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFlashCardsComponent } from './view-flash-cards.component';

describe('ViewFlashCardsComponent', () => {
  let component: ViewFlashCardsComponent;
  let fixture: ComponentFixture<ViewFlashCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlashCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFlashCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
