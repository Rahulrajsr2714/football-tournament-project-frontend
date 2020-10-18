import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatepointComponent } from './adminupdatepoint.component';

describe('AdminupdatepointComponent', () => {
  let component: AdminupdatepointComponent;
  let fixture: ComponentFixture<AdminupdatepointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatepointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatepointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
