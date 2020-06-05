import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToolsListComponent } from './admin-tools-list.component';

describe('ToolsPageComponent', () => {
  let component: AdminToolsListComponent;
  let fixture: ComponentFixture<AdminToolsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToolsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
