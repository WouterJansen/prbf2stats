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
  pageTitle = 'Map Details';
  pageSubtitle = 'mapname';
  pageArrow = true;
  pageLink = '/statistics/maps';
  constructor(private route: ActivatedRoute, private mapService: MapService) {
  }

  ngOnInit() {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.mapService.getAllLevels().subscribe(maplist => {
      for (const map of maplist.maps) {
        if (this.mapName === map.name) {
          this.pageSubtitle = map.displayName;
        }
      }
    });
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


