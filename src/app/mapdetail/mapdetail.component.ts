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

  levels = [];
  mapName: string;
  versions = [];
  pageTitle = 'Map Details';
  pageSubtitle = 'mapname';
  pageArrow = true;
  pageLink = '/statistics/maps';
  link;
  heatmap;
  selectedversion;
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
        // for (const version of this.versions) {
        //   this.mapService.getHeatData(version + '/' + this.mapName + '/' + this.mapName + '.json')
        //     .subscribe(heatData => this.heatData.push(heatData));
        // }
      }
    );
  }

  clickForm(): void {
    if (this.selectedroute === 'none') {
      if (this.selectedlayer === 'none') {
        if (this.selectedgamemode === 'none') {
          this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' + this.mapName + '.json')
            .subscribe(heatData => {
              let maxvalue = 0;
              for (const entry of heatData) {
                if (entry.value > maxvalue) {
                  maxvalue = entry.value;
                }
              }
              if (maxvalue > 101) {
                maxvalue = 100;
              }
              this.heatmap.setData({
                data: heatData
              });
              this.heatmap.setDataMax(maxvalue);

            });
        } else {
          this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' +
            this.levels[this.selectedversion].gameModes[this.selectedgamemode].name + '.json')
            .subscribe(heatData => {
              let maxvalue = 0;
              for (const entry of heatData) {
                if (entry.value > maxvalue) {
                  maxvalue = entry.value;
                }
              }
              if (maxvalue > 101) {
                maxvalue = 100;
              }
              this.heatmap.setData({
                data: heatData
              });
              this.heatmap.setDataMax(maxvalue);

            });
        }
      } else {
        this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' +
          this.levels[this.selectedversion].gameModes[this.selectedgamemode].layers[this.selectedlayer].name + '.json')
          .subscribe(heatData => {
            let maxvalue = 0;
            for (const entry of heatData) {
              if (entry.value > maxvalue) {
                maxvalue = entry.value;
              }
            }
            if (maxvalue > 101) {
              maxvalue = 100;
            }
            this.heatmap.setDataMax(maxvalue);
            this.heatmap.setData({
              data: heatData
            });
            this.heatmap.setDataMax(maxvalue);
          });
      }
    } else {
      this.mapService.getHeatData(this.versions[this.selectedversion] + '/' + this.mapName + '/' +
        this.levels[this.selectedversion].gameModes[this.selectedgamemode].layers[this.selectedlayer].routes[this.selectedroute].id +
        '.json')
        .subscribe(heatData => {
          let maxvalue = 0;
          for (const entry of heatData) {
            if (entry.value > maxvalue) {
              maxvalue = entry.value;
            }
          }
          if (maxvalue > 101) {
            maxvalue = 100;
          }
          this.heatmap.setData({
            data: heatData
          });
          this.heatmap.setDataMax(maxvalue);
        });
    }
  }
}


