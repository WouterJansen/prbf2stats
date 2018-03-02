import { Component, OnInit } from '@angular/core';
import { Level } from '../level';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {MapService} from '../map.service';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {

  level: Level;
  mapName: string;
  data: object;

  constructor(    private route: ActivatedRoute,
                  private mapService: MapService,
                  private location: Location) { }

  ngOnInit() {
    this.getLevel();
  }

  goBack(): void {
    this.location.back();
  }

  getLevel(): void {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.mapService.getLevel(this.route.snapshot.paramMap.get('mapName')).subscribe(level => this.level = level);
    // tslint:disable-next-line:max-line-length
    // this.mapService.getLevel(this.route.snapshot.paramMap.get('mapName')).subscribe(level => this.level = new Level(level.averageTicketsTeam1, level.averageTicketsTeam2, level.averageDuration, level.timesPlayed, level.winsTeam1, level.winsTeam2, level.draws, level.gameModes));
  }

}


