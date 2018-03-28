import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {MapService} from '../map.service';

@Component({
  selector: 'app-maplist',
  templateUrl: './maplist.component.html',
  styleUrls: ['./maplist.component.css']
})
export class MapListComponent implements OnInit, AfterViewInit {

  mapList;
  roundsPlayed = 0;
  team1Balance = 0;
  team2Balance = 0;
  totalWinsTeam1 = 0;
  totalWinsTeam2 = 0;
  averageDuration = 0;
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

  getdata(mapList) {
    this.mapList = mapList;
    this.mapList.maps.sort(function(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    for (const map of mapList.maps) {
      this.roundsPlayed = this.roundsPlayed + map.timesPlayed;
      this.totalWinsTeam1 = this.totalWinsTeam1 + map.winsTeam1;
      this.totalWinsTeam2 = this.totalWinsTeam2 + map.winsTeam2;
      this.averageDuration = this.averageDuration + map.averageDuration;
    }
    this.averageDuration = this.averageDuration / mapList.maps.length;
    this.team1Balance = parseFloat((this.totalWinsTeam1 / this.roundsPlayed * 100).toFixed(2));
    this.team2Balance = parseFloat((this.totalWinsTeam2 / this.roundsPlayed * 100).toFixed(2));
    this.dataSource = new MatTableDataSource(this.mapList.maps);
  }

  public getAllLevels(): void {
    this.mapService.getAllLevels().subscribe(mapList => this.getdata(mapList));
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
