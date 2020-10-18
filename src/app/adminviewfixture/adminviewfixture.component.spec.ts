import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewfixtureComponent } from './adminviewfixture.component';

describe('AdminviewfixtureComponent', () => {
  let component: AdminviewfixtureComponent;
  let fixture: ComponentFixture<AdminviewfixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewfixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewfixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
