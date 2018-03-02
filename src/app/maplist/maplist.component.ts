import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {MapService} from '../map.service';
import {Level} from '../level';

@Component({
  selector: 'app-maplist',
  templateUrl: './maplist.component.html',
  styleUrls: ['./maplist.component.css']
})
export class MaplistComponent implements OnInit {

  maplist;
  roundsplayed = 0;
  bluforbias = 0;
  totalteam1 = 0;
  averagetime = 0;
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.getAllLevels();
    for (const map of this.maplist.maps) {
      this.roundsplayed = this.roundsplayed + map.timesPlayed;
    }
  }

  getdata(maplist) {
    this.maplist = maplist
    this.maplist.maps.sort(function(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
    for (const map of maplist.maps) {
      this.roundsplayed = this.roundsplayed + map.timesPlayed;
      this.totalteam1 = this.totalteam1 + map.winsTeam1;
      this.averagetime = this.averagetime + map.averageDuration;
    }
    this.averagetime = this.averagetime / maplist.maps.length;
    this.bluforbias = parseFloat((this.totalteam1 / this.roundsplayed * 100).toFixed(2));
  }

  public getAllLevels(): void {
    this.mapService.getAllLevels().subscribe(maplist => this.getdata(maplist));
  }
}
