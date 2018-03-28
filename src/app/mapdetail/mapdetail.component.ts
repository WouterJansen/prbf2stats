import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MapService} from '../map.service';

declare const h337: any;

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit, AfterViewInit {

  mapStatistics = [];
  mapName: string;
  versionList = [];
  pageTitle = 'Map Details';
  pageSubtitle = 'mapname';
  pageArrow = true;
  pageLink = '/statistics/maps';
  mapImageUrl;
  combinedMovementMap;
  selectedVersion = 'none';
  selectedGameMode = 'none';
  selectedLayer = 'none';
  selectedRoute = 'none';

  constructor(private route: ActivatedRoute, private mapService: MapService) {

  }

  ngAfterViewInit() {

    this.combinedMovementMap = h337.create({
      container: window.document.querySelector('#heatmap'),
      radius: 2,
    });
    const data = {
      max: 0.25,
      min: 0,
      data: [ ]
    };
    this.combinedMovementMap.setData(data);
  }


  ngOnInit() {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.mapImageUrl = './data/images/' + this.mapName + '.jpg';
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
            this.versionList = map.versionList;
          }
        }
        for (const version of this.versionList) {
          this.mapService.getLevel(version + '/' + this.mapName)
            .subscribe(data => this.mapStatistics.push(data));
        }
      }
    );
  }

  clickHeatMapForm(): void {
    if (this.selectedRoute === 'none') {
      if (this.selectedLayer === 'none') {
        if (this.selectedGameMode === 'none') {
          this.mapService.getHeatData(this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement.json')
            .subscribe(heatData => {
              this.combinedMovementMap.setData({
                data: heatData
              });
              this.combinedMovementMap.setDataMin(0.03);
              this.combinedMovementMap.setDataMax(0.25);
            });
        } else {
          this.mapService.getHeatData(this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement_' +
            this.mapStatistics[this.selectedVersion].gameModes[this.selectedGameMode].name + '.json')
            .subscribe(heatData => {
              this.combinedMovementMap.setData({
                data: heatData
              });
              this.combinedMovementMap.setDataMin(0.03);
              this.combinedMovementMap.setDataMax(0.25);

            });
        }
      } else {
        this.mapService.getHeatData(this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement_' +
          this.mapStatistics[this.selectedVersion].gameModes[this.selectedGameMode].name + '_' +
          this.mapStatistics[this.selectedVersion].gameModes[this.selectedGameMode].layers[this.selectedLayer].name + '.json')
          .subscribe(heatData => {
            this.combinedMovementMap.setData({
              data: heatData
            });
            this.combinedMovementMap.setDataMin(0.03);
            this.combinedMovementMap.setDataMax(0.25);
          });
      }
    } else {
      this.mapService.getHeatData(this.versionList[this.selectedVersion] + '/' + this.mapName + '/combinedmovement_' +
        this.mapStatistics[this.selectedVersion].gameModes[this.selectedGameMode].name + '_' +
        this.mapStatistics[this.selectedVersion].gameModes[this.selectedGameMode].layers[this.selectedLayer].name + '_' +
        this.mapStatistics[this.selectedVersion].gameModes[this.selectedGameMode].layers[this.selectedLayer].routes[this.selectedRoute].id +
        '.json')
        .subscribe(heatData => {
          this.combinedMovementMap.setData({
            data: heatData
          });
          this.combinedMovementMap.setDataMin(0.03);
          this.combinedMovementMap.setDataMax(0.25);
        });
    }
  }
}


