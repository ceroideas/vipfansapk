import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analyzing02Page } from './analyzing02.page';

describe('Analyzing02Page', () => {
  let component: Analyzing02Page;
  let fixture: ComponentFixture<Analyzing02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analyzing02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analyzing02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
