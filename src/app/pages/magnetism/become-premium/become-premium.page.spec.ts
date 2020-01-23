import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomePremiumPage } from './become-premium.page';

describe('BecomePremiumPage', () => {
  let component: BecomePremiumPage;
  let fixture: ComponentFixture<BecomePremiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomePremiumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomePremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
