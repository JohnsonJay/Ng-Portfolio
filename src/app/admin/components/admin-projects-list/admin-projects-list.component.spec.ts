import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsListComponent } from './admin-projects-list.component';

describe('ProjectsPageComponent', () => {
  let component: AdminProjectsListComponent;
  let fixture: ComponentFixture<AdminProjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
