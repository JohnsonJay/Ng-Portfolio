import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSkillsListComponent } from './admin-skills-list.component';

describe('SkillsPageComponent', () => {
  let component: AdminSkillsListComponent;
  let fixture: ComponentFixture<AdminSkillsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSkillsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
