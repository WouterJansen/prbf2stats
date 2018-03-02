import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {MapService} from '../map.service';

@Component({
  selector: 'app-maplist',
  templateUrl: './maplist.component.html',
  styleUrls: ['./maplist.component.css']
})
export class MaplistComponent implements OnInit {

  maplist;
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.getAllLevels();
  }

  public getAllLevels(): void {
    this.mapService.getAllLevels().subscribe(maplist => this.maplist = maplist);
  }
}
