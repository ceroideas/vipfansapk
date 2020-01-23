import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GettingVideosPage } from './getting-videos.page';

describe('GettingVideosPage', () => {
  let component: GettingVideosPage;
  let fixture: ComponentFixture<GettingVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingVideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GettingVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
