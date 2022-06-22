import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimerComponent } from './create-timer.component';

describe('CreateTimerComponent', () => {
  let component: CreateTimerComponent;
  let fixture: ComponentFixture<CreateTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
