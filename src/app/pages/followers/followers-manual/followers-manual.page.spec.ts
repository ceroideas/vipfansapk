import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersManualPage } from './followers-manual.page';

describe('FollowersManualPage', () => {
  let component: FollowersManualPage;
  let fixture: ComponentFixture<FollowersManualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersManualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
