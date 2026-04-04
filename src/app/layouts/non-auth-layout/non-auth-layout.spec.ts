import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthLayout } from './non-auth-layout';

describe('NonAuthLayout', () => {
  let component: NonAuthLayout;
  let fixture: ComponentFixture<NonAuthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonAuthLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonAuthLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
