import {Layer} from './layer';

export class GameMode {

  name: string;
  averageTicketsTeam1: number;
  averageTicketsTeam2: number;
  averageDuration: number;
  timesPlayed: number;
  winsTeam1: number;
  winsTeam2: number;
  draws: number;
  layers: Layer[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(name: string, averageTicketsTeam1: number, averageTicketsTeam2: number, averageDuration: number, timesPlayed: number, winsTeam1: number, winsTeam2: number, draws: number, layers: Layer[]) {
    this.name = name;
    this.averageTicketsTeam1 = averageTicketsTeam1;
    this.averageTicketsTeam2 = averageTicketsTeam2;
    this.averageDuration = averageDuration;
    this.timesPlayed = timesPlayed;
    this.winsTeam1 = winsTeam1;
    this.winsTeam2 = winsTeam2;
    this.draws = draws;
    this.layers = layers;
  }
}
