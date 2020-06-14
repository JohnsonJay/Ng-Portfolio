import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutMeComponent } from './admin-about-me.component';

describe('AdminAboutMeComponent', () => {
  let component: AdminAboutMeComponent;
  let fixture: ComponentFixture<AdminAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
