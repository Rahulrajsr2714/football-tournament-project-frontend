import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistteamsComponent } from './adminlistteams.component';

describe('AdminlistteamsComponent', () => {
  let component: AdminlistteamsComponent;
  let fixture: ComponentFixture<AdminlistteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlistteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
