import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form01Page } from './form01.page';

describe('Form01Page', () => {
  let component: Form01Page;
  let fixture: ComponentFixture<Form01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
