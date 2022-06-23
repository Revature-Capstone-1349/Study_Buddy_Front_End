import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlashCardComponent } from './add-flash-card.component';

describe('AddFlashCardComponent', () => {
  let component: AddFlashCardComponent;
  let fixture: ComponentFixture<AddFlashCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlashCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
