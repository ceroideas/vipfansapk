import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideosManualPage } from './videos-manual.page';

describe('VideosManualPage', () => {
  let component: VideosManualPage;
  let fixture: ComponentFixture<VideosManualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosManualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
