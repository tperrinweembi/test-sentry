import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoMenuItemComponent } from './bo-menu-item.component';

describe('BoMenuItemComponent', () => {
  let component: BoMenuItemComponent;
  let fixture: ComponentFixture<BoMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
