import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfixtureComponent } from './viewfixture.component';

describe('ViewfixtureComponent', () => {
  let component: ViewfixtureComponent;
  let fixture: ComponentFixture<ViewfixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
