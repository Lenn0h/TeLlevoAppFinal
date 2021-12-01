import { TestBed } from '@angular/core/testing';

import { LogincontrolGuard } from './logincontrol.guard';

describe('LogincontrolGuard', () => {
  let guard: LogincontrolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogincontrolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
