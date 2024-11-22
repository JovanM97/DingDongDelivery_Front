import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderScreenComponent } from './new-order-screen.component';

describe('NewOrderScreenComponent', () => {
  let component: NewOrderScreenComponent;
  let fixture: ComponentFixture<NewOrderScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
