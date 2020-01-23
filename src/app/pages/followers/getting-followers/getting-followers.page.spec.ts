import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingFollowersPage } from './getting-followers.page';

describe('GettingFollowersPage', () => {
  let component: GettingFollowersPage;
  let fixture: ComponentFixture<GettingFollowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingFollowersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingFollowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
