import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {

  constructor(
    private http: HttpClient) { }

  getAllLevels (): Observable<any> {
    return this.http.get<any>('./maps/maplist.json');
  }

  getLevel (mapname: string): Observable<any> {
    return this.http.get<any>('./maps/' + mapname + '/data.json');
  }
}
