import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MaterialModule } from './material/material.module';

import * as fromRoot from './store/app.state';
import * as statsActions from './store/stats/stats.actions';
import * as statsSelectors from './store/stats/stats.selectors';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: any ;
  let fixture: ComponentFixture<any>;
  let store: MockStore<fromRoot.IAppState>;
  let dispatchSpy: jest.SpyInstance;

  const initialState: fromRoot.IAppState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    store = TestBed.inject<MockStore<fromRoot.IAppState>>(MockStore);
    dispatchSpy = jest.spyOn(store, 'dispatch');
    expect(app).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should dispatch an action to get stats', () => {
      const action = new statsActions.GetStats(1);
      fixture.detectChanges();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });

    it('should get stats', done => {
      store.overrideSelector(statsSelectors.getStats, [1, 2]);

      fixture.detectChanges();

      app.stats$.subscribe(stats => {
        expect(stats).toEqual([1, 2]);
        done();
      });
    });
  });

});
