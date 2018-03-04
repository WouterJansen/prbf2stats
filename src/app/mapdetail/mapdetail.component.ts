import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MapService} from '../map.service';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {

  levels = [];
  mapName: string;
  versions = [];

  constructor(private route: ActivatedRoute, private mapService: MapService) {
  }

  ngOnInit() {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.getVersions();

  }

  getVersions(): void {
    this.mapService.getAllLevels().subscribe(maplist => {
      for (const map of maplist.maps) {
        if (map.name === this.mapName) {
          this.versions = map.versions;
        }
      }
      for (const version of this.versions) {
        this.mapService.getLevel(version + '/' + this.mapName)
          .subscribe(level => this.levels.push(level));
      }
    }
    );
  }

}


