import { TestBed } from '@angular/core/testing';

import { AuthService } from 'c:/Users/danny/OneDrive/Desktop/Revature.Project3/Study_Buddy_Front_End/src/app/Services/auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
