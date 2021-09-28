import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeWorkspaceComponent } from './backoffice-workspace.component';

describe('BackofficeWorkspaceComponent', () => {
  let component: BackofficeWorkspaceComponent;
  let fixture: ComponentFixture<BackofficeWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
