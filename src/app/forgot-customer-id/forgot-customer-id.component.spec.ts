import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotCustomerIDComponent } from './forgot-customer-id.component';

describe('ForgotCustomerIDComponent', () => {
  let component: ForgotCustomerIDComponent;
  let fixture: ComponentFixture<ForgotCustomerIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotCustomerIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotCustomerIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
