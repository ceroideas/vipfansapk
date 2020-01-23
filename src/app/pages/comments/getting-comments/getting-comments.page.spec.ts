import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingCommentsPage } from './getting-comments.page';

describe('GettingCommentsPage', () => {
  let component: GettingCommentsPage;
  let fixture: ComponentFixture<GettingCommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingCommentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
