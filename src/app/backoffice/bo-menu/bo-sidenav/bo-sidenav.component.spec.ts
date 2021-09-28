import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoSidenavComponent } from './bo-sidenav.component';

describe('BoSidenavComponent', () => {
  let component: BoSidenavComponent;
  let fixture: ComponentFixture<BoSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
