import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingLikesPage } from './getting-likes.page';

describe('GettingLikesPage', () => {
  let component: GettingLikesPage;
  let fixture: ComponentFixture<GettingLikesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingLikesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingLikesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
