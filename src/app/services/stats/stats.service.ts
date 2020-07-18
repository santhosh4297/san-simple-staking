import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private http: HttpClient) {}

  public getStats(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`https://api.tzstats.com/tables/op?time.gte=today&limit=${limit}`);
  }
}
