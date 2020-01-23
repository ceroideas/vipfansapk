import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMagnetismPage } from './transfer-magnetism.page';

describe('TransferMagnetismPage', () => {
  let component: TransferMagnetismPage;
  let fixture: ComponentFixture<TransferMagnetismPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMagnetismPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMagnetismPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
