import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {

  players: { username: string, score: number }[] = [];

  constructor() {
    this.players = [
      { username: 'Player1', score: 100 },
      { username: 'Player2', score: 90 },
      { username: 'Player3', score: 80 },
      { username: 'Player4', score: 70 },
      { username: 'Player5', score: 60 }
    ];
  }


  ngOnInit() {
    
  }

}
