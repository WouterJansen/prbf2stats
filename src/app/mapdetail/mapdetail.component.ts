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
  constructor(private route: ActivatedRoute, private mapService: MapService) {

  }

  ngAfterViewInit() {
    this.link = './data/images/' + this.mapName + '.jpg';
    this.heatmap = h337.create({
      container: window.document.querySelector('#heatmap'),
      radius: 1,
    });
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
        // for (const version of this.versions) {
        //   this.mapService.getHeatData(version + '/' + this.mapName + '/' + this.mapName + '.json')
        //     .subscribe(heatData => this.heatData.push(heatData));
        // }
    }
    );
    this.mapService.getHeatData('v1.5.3.3/' + this.mapName + '/' + this.mapName + '.json')
        .subscribe(heatData => {
          let maxvalue = 0;
          for (const entry of heatData) {
            if (entry.value > maxvalue) {
              maxvalue = entry.value;
            }
          }
          if (maxvalue > 300) {
            maxvalue = 300;
          }
          this.heatmap.setData({
            max: maxvalue,
            data: heatData
          });
        });
  }

}


