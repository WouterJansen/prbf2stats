import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MapService} from '../map.service';

declare const h337: any;

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit, AfterViewInit {

  levels = [];
  mapName: string;
  versions = [];
  pageTitle = 'Map Details';
  pageSubtitle = 'mapname';
  pageArrow = true;
  pageLink = '/statistics/maps';
  link;
  heatmap;
  selectedversion = 'none';
  selectedgamemode = 'none';
  selectedlayer = 'none';
  selectedroute = 'none';

  constructor(private route: ActivatedRoute, private mapService: MapService) {
  }

  ngAfterViewInit() {
    this.heatmap = h337.create({
      container: window.document.querySelector('#heatmap'),
      radius: 2,
    });
  }


  ngOnInit() {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.link = './data/images/' + this.mapName + '.jpg';
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

  clickHeatMapForm(): void {
    if (this.selectedroute === 'none') {
      if (this.selectedlayer === 'none') {
        if (this.selectedgamemode === 'none') {
          const data = {
            max: 0.25,
            min: 0,
            data: [ ]
          };
          this.heatmap.setData(data);
          for (const gameMode of this.levels[this.selectedversion].gameModes) {
            for (const layer of gameMode.layers) {
              for (const route of layer.routes) {
                this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' +
                  gameMode.name + '_' + layer.name + '_' + route.id + '.json')
                  .subscribe(heatData => {
                    this.heatmap.addData(heatData);
                    this.heatmap.setDataMin(0.03);
                    this.heatmap.setDataMax(0.25);
                  });
              }
            }
          }
        } else {
          const data = {
            max: 0.25,
            min: 0,
            data: [ ]
          };
          this.heatmap.setData(data);
          for (const layer of this.levels[this.selectedversion].gameModes[this.selectedgamemode].layers) {
            for (const route of layer.routes) {
              this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' +
                this.levels[this.selectedversion].gameModes[this.selectedgamemode].name + '_' + layer.name + '_' + route.id + '.json')
                .subscribe(heatData => {
                  this.heatmap.addData(heatData);
                  this.heatmap.setDataMin(0.03);
                  this.heatmap.setDataMax(0.25);
                });
            }
          }
        }
      } else {
        const data = {
          max: 0.25,
          min: 0,
          data: [ ]
        };
        this.heatmap.setData(data);
        for (const route of this.levels[this.selectedversion].gameModes[this.selectedgamemode].layers[this.selectedlayer].routes) {
          this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' +
            this.levels[this.selectedversion].gameModes[this.selectedgamemode].name + '_' +
            this.levels[this.selectedversion].gameModes[this.selectedgamemode].layers[this.selectedlayer].name + '_' + route.id + '.json')
            .subscribe(heatData => {
              this.heatmap.addData(heatData);
              this.heatmap.setDataMin(0.03);
              this.heatmap.setDataMax(0.25);
            });
        }
      }
    } else {
      const data = {
        max: 0.25,
        min: 0,
        data: [ ]
      };
      this.heatmap.setData(data);
      this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' +
        this.levels[this.selectedversion].gameModes[this.selectedgamemode].name + '_' +
        this.levels[this.selectedversion].gameModes[this.selectedgamemode].layers[this.selectedlayer].name +
        '_' + this.levels[this.selectedversion].gameModes[this.selectedgamemode].layers[this.selectedlayer].routes[this.selectedroute].id
        + '.json')
        .subscribe(heatData => {
          this.heatmap.addData(heatData);
          this.heatmap.setDataMin(0.03);
          this.heatmap.setDataMax(0.25);
        });
    }
  }
}


