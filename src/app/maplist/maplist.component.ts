import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {Level} from '../level';
import {MapService} from '../map.service';

@Component({
  selector: 'app-maplist',
  templateUrl: './maplist.component.html',
  styleUrls: ['./maplist.component.css']
})
export class MaplistComponent implements OnInit {

  levels: string[] = [];
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.getLevels();
  }

  public getLevels(): void {
    this.mapService.getLevels().subscribe(data => {
      this.mapListToLevels(data as string[]);
    });
  }

  private mapListToLevels(mapList: string[]) {
    for (const mapName of mapList) {
      this.levels.push(mapName);
    }
  }
}
