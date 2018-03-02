import { Component, OnInit } from '@angular/core';
import { Level } from '../level';
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
                  private mapService: MapService) { }

  ngOnInit() {
    this.getLevel();
  }

  getLevel(): void {
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    this.mapService.getLevel(this.route.snapshot.paramMap.get('mapName')).subscribe(level => this.level = level);
  }

}


