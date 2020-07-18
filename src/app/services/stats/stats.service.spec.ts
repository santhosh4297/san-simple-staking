import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';


import { StatsService } from './stats.service';

describe('StatsService', () => {
  let statsService: StatsService;
  let apiService: HttpClient;

  let getRequestSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StatsService,
        {
          provide: HttpClient,
          useValue: {
            get: () => {},
            post: () => {},
            put: () => {}
          }
        }
      ]
    });
    statsService = TestBed.inject(StatsService);
    apiService = TestBed.inject(HttpClient);

    getRequestSpy = jest.spyOn(apiService, 'get');
  });

  it('should be created', () => {
    expect(statsService).toBeTruthy();
  });

  it('should make a GET request to get the stats data', () => {
    statsService.getStats(1);
    expect(getRequestSpy).toHaveBeenCalledWith(
      `https://api.tzstats.com/tables/op?time.gte=today&limit=1`
    );
  });
});
