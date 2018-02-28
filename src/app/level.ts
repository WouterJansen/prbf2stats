import {GameMode} from './game-mode';

export class Level {

 averageTicketsTeam1: number;
 averageTicketsTeam2: number;
 averageDuration: number;
 timesPlayed: number;
 winsTeam1: number;
 winsTeam2: number;
 draws: number;
 gameModes: GameMode[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(averageTicketsTeam1: number, averageTicketsTeam2: number, averageDuration: number, timesPlayed: number, winsTeam1: number, winsTeam2: number, draws: number, gameModes: GameMode[]) {
    this.averageTicketsTeam1 = averageTicketsTeam1;
    this.averageTicketsTeam2 = averageTicketsTeam2;
    this.averageDuration = averageDuration;
    this.timesPlayed = timesPlayed;
    this.winsTeam1 = winsTeam1;
    this.winsTeam2 = winsTeam2;
    this.draws = draws;
    this.gameModes = gameModes;
  }
}
