import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTemplatePage } from './comments-template.page';

describe('CommentsTemplatePage', () => {
  let component: CommentsTemplatePage;
  let fixture: ComponentFixture<CommentsTemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsTemplatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
