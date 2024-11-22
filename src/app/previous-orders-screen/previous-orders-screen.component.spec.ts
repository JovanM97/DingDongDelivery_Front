import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrdersScreenComponent } from './previous-orders-screen.component';

describe('PreviousOrdersScreenComponent', () => {
  let component: PreviousOrdersScreenComponent;
  let fixture: ComponentFixture<PreviousOrdersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousOrdersScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousOrdersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
