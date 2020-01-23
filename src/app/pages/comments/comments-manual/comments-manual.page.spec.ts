import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsManualPage } from './comments-manual.page';

describe('CommentsManualPage', () => {
  let component: CommentsManualPage;
  let fixture: ComponentFixture<CommentsManualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsManualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
