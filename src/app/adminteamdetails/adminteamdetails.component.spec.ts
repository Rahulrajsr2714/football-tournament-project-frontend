import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteamdetailsComponent } from './adminteamdetails.component';

describe('AdminteamdetailsComponent', () => {
  let component: AdminteamdetailsComponent;
  let fixture: ComponentFixture<AdminteamdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminteamdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminteamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
