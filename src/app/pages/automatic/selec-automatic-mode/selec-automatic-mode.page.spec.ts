import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecAutomaticModePage } from './selec-automatic-mode.page';

describe('SelecAutomaticModePage', () => {
  let component: SelecAutomaticModePage;
  let fixture: ComponentFixture<SelecAutomaticModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecAutomaticModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecAutomaticModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
