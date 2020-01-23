import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCommentsPage } from './send-comments.page';

describe('SendCommentsPage', () => {
  let component: SendCommentsPage;
  let fixture: ComponentFixture<SendCommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCommentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
