import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingExportsComponent } from './accounting-exports.component';

describe('AccountingExportsComponent', () => {
  let component: AccountingExportsComponent;
  let fixture: ComponentFixture<AccountingExportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingExportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
