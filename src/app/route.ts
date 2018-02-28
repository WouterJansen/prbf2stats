export class Route {

  id: string;
  averageTicketsTeam1: number;
  averageTicketsTeam2: number;
  averageDuration: number;
  timesPlayed: number;
  winsTeam1: number;
  winsTeam2: number;
  draws: number;

// tslint:disable-next-line:max-line-length
  constructor(id: string, averageTicketsTeam1: number, averageTicketsTeam2: number, averageDuration: number, timesPlayed: number, winsTeam1: number, winsTeam2: number, draws: number) {
    this.id = id;
    this.averageTicketsTeam1 = averageTicketsTeam1;
    this.averageTicketsTeam2 = averageTicketsTeam2;
    this.averageDuration = averageDuration;
    this.timesPlayed = timesPlayed;
    this.winsTeam1 = winsTeam1;
    this.winsTeam2 = winsTeam2;
    this.draws = draws;
  }

}
