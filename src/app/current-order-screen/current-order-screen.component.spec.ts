import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrderScreenComponent } from './current-order-screen.component';

describe('CurrentOrderScreenComponent', () => {
  let component: CurrentOrderScreenComponent;
  let fixture: ComponentFixture<CurrentOrderScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOrderScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
