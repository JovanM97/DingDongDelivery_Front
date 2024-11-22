import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOrdersScreenComponent } from './delivery-orders-screen.component';

describe('DeliveryOrdersScreenComponent', () => {
  let component: DeliveryOrdersScreenComponent;
  let fixture: ComponentFixture<DeliveryOrdersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryOrdersScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryOrdersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
