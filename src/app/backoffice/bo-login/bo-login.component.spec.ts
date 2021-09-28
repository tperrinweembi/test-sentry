import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoLoginComponent } from './bo-login.component';

describe('BoLoginComponent', () => {
  let component: BoLoginComponent;
  let fixture: ComponentFixture<BoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
