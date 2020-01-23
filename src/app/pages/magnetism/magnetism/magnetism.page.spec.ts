import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnetismPage } from './magnetism.page';

describe('MagnetismPage', () => {
  let component: MagnetismPage;
  let fixture: ComponentFixture<MagnetismPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagnetismPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnetismPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
