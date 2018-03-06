import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {MapService} from '../map.service';

@Component({
  selector: 'app-maplist',
  templateUrl: './maplist.component.html',
  styleUrls: ['./maplist.component.css']
})
export class MaplistComponent implements OnInit, AfterViewInit {

  maplist;
  roundsplayed = 0;
  team1balance = 0;
  team2balance = 0;
  totalteam1 = 0;
  totalteam2 = 0;
  averagetime = 0;
  displayedColumns = ['name', 'timesPlayed', 'averageDuration', 'averageTicketsTeam1',
    'averageTicketsTeam2', 'winsTeam1', 'winsTeam2'];
  dataSource;
  pageTitle = 'Map Statistics';
  pageSubtitle = 'Overview';
  pageArrow = true;
  pageLink = '/statistics';

  @ViewChild(MatSort) sort: MatSort;

  constructor(private mapService: MapService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllLevels();
  }

  getdata(maplist) {
    this.maplist = maplist;
    this.maplist.maps.sort(function(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    for (const map of maplist.maps) {
      this.roundsplayed = this.roundsplayed + map.timesPlayed;
      this.totalteam1 = this.totalteam1 + map.winsTeam1;
      this.totalteam2 = this.totalteam2 + map.winsTeam2;
      this.averagetime = this.averagetime + map.averageDuration;
    }
    this.averagetime = this.averagetime / maplist.maps.length;
    this.team1balance = parseFloat((this.totalteam1 / this.roundsplayed * 100).toFixed(2));
    this.team2balance = parseFloat((this.totalteam2 / this.roundsplayed * 100).toFixed(2));
    this.dataSource = new MatTableDataSource(this.maplist.maps);
  }

  public getAllLevels(): void {
    this.mapService.getAllLevels().subscribe(maplist => this.getdata(maplist));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
