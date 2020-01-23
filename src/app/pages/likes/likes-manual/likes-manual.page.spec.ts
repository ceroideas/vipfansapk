import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesManualPage } from './likes-manual.page';

describe('LikesManualPage', () => {
  let component: LikesManualPage;
  let fixture: ComponentFixture<LikesManualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesManualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
