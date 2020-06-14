import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessagesComponent } from './admin-messages.component';

describe('AdminMessagesComponent', () => {
  let component: AdminMessagesComponent;
  let fixture: ComponentFixture<AdminMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
