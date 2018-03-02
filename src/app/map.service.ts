import { Injectable } from '@angular/core';
import { Level } from './level';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MapService {

  constructor(
    private http: HttpClient) { }

  getAllLevels (): Observable<any> {
    return this.http.get<any>('./maps/maplist.json');
  }

  getLevel (mapname: string): Observable<Level> {
    return this.http.get<Level>('./maps/' + mapname + '/data.json');
  }

}
