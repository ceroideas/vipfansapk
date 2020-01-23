import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMagnetismPage } from './select-magnetism.page';

describe('SelectMagnetismPage', () => {
  let component: SelectMagnetismPage;
  let fixture: ComponentFixture<SelectMagnetismPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMagnetismPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMagnetismPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
