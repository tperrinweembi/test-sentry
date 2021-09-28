import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopWorkspaceComponent } from './shop-workspace.component';

describe('ShopWorkspaceComponent', () => {
  let component: ShopWorkspaceComponent;
  let fixture: ComponentFixture<ShopWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
