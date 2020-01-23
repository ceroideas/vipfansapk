import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analyzing01Page } from './analyzing01.page';

describe('Analyzing01Page', () => {
  let component: Analyzing01Page;
  let fixture: ComponentFixture<Analyzing01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analyzing01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analyzing01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
