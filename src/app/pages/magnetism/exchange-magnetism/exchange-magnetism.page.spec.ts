import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeMagnetismPage } from './exchange-magnetism.page';

describe('ExchangeMagnetismPage', () => {
  let component: ExchangeMagnetismPage;
  let fixture: ComponentFixture<ExchangeMagnetismPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeMagnetismPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeMagnetismPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
