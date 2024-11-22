import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationsPageComponent } from './verifications-page.component';

describe('VerificationsPageComponent', () => {
  let component: VerificationsPageComponent;
  let fixture: ComponentFixture<VerificationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
