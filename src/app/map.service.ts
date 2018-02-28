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

  /** GET heroes from the server */
  getLevels (): Observable<string[]> {
    return this.http.get<string[]>('./maps/maplist.json');
  }

  getLevel (mapname: string): Observable<Level> {
    return this.http.get<Level>('./maps/' + mapname + '/data.json');
  }

}
