import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectMagnetismMessageModalPage } from './select-magnetism-message-modal.page';

describe('SelectMagnetismMessageModalPage', () => {
  let component: SelectMagnetismMessageModalPage;
  let fixture: ComponentFixture<SelectMagnetismMessageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMagnetismMessageModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectMagnetismMessageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
