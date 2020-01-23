import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferMagnetismModalPage } from './transfer-magnetism-modal.page';

describe('TransferMagnetismModalPage', () => {
  let component: TransferMagnetismModalPage;
  let fixture: ComponentFixture<TransferMagnetismModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMagnetismModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferMagnetismModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
