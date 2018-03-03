import { Component, OnInit } from '@angular/core';
import { Level } from '../level';
import { ActivatedRoute } from '@angular/router';
import {MapService} from '../map.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {

  level;
  mapName: string;
  data: object;
  dataSource;
  displayedColumns = ['name', 'timesPlayed', 'averageDuration', 'averageTicketsTeam1',
    'averageTicketsTeam2', 'winsTeam1', 'winsTeam2'];

  constructor( private route: ActivatedRoute, private mapService: MapService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getLevel();
    this.dataSource = new MatTableDataSource(this.level);
  }

  getLevel(): void {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.mapService.getLevel(this.route.snapshot.paramMap.get('mapName')).subscribe(level => this.level = level);
  }

}


