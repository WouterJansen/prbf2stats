import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MapService} from '../map.service';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapDetailComponent implements OnInit {

  statistics = [];
  mapName: string;
  versionList = [];
  pageTitle = 'Detailed Map Statistics';
  pageSubtitle = 'mapname';
  pageArrow = true;
  pageLink = '/statistics/maps';
  mapImageURL;
  combinedMovementImageURL;
  selectedVersion = 'none';
  selectedGameMode = 'none';
  selectedLayer = 'none';
  selectedRoute = 'none';

  constructor(private route: ActivatedRoute, private mapService: MapService) {

  }

  ngOnInit() {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.mapImageURL = './data/images/' + this.mapName + '.jpg';
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
            this.versionList = map.versions;
          }
        }
        for (const version of this.versionList) {
          this.mapService.getLevel(version + '/' + this.mapName)
            .subscribe(level => this.statistics.push(level));
        }
      }
    );
  }

  clickHeatMapForm(): void {
    if (this.selectedRoute === 'none') {
      if (this.selectedLayer === 'none') {
        if (this.selectedGameMode === 'none') {
          this.combinedMovementImageURL =
            './data/' + this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement.png';
        } else {
          this.combinedMovementImageURL =
            './data/' + this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement_' +
            this.statistics[this.selectedVersion].gameModes[this.selectedGameMode].name + '.png';
        }
      } else {
        this.combinedMovementImageURL =
          './data/' + this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement_' +
          this.statistics[this.selectedVersion].gameModes[this.selectedGameMode].name + '_' +
          this.statistics[this.selectedVersion].gameModes[this.selectedGameMode].layers[this.selectedLayer].name + '.png';
      }
    } else {
      this.combinedMovementImageURL =
        './data/' + this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement_' +
        this.statistics[this.selectedVersion].gameModes[this.selectedGameMode].name + '_' +
        this.statistics[this.selectedVersion].gameModes[this.selectedGameMode].layers[this.selectedLayer].name + '_' +
        this.statistics[this.selectedVersion].gameModes[this.selectedGameMode].layers[this.selectedLayer].routes[this.selectedRoute].id +
        '.png';
    }
  }
}


