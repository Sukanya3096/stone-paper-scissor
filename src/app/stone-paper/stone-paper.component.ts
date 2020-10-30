import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PlayService } from '../play.service';
import {Howl} from 'howler';
@Component({
  selector: 'app-stone-paper',
  templateUrl: './stone-paper.component.html',
  styleUrls: ['./stone-paper.component.css']
})
export class StonePaperComponent implements OnInit{
  scores = [0 , 0];
  weapons = [
    'rock',
    'paper',
    'scissors'
  ]
  playerSelected = -1;
  loading= false;
  player1=null;
  isResultShow = false;
  audio;
  
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0 
  enemySelected  = -1;

  constructor(public playService: PlayService) { }

  ngOnInit() {
    this.player1 = this.playService.name;
  }

  pick( weapon: number): void {
    console.log(weapon);
    // return immediately when still loading. You don't want
    // the user to spam the button.
    if(this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;
   
   //create a delay to simulate enemy's turn.
    setTimeout( () => {
      this.loading = false;
      // generate a number from 0 -2 
      const randomNum =  Math.floor(Math.random() * 3 ) ;
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    },  Math.floor(Math.random()  * 500 ) +200);
  }
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
   // if you and the enemy have the same weapon, then it is a tie.
    if( playerPick ==  enemyPick)
     {
     this.theResult = 2;
     let sound = new Howl({
      src: ['../../assets/tie.mp3']
        });

     sound.play()
   }
     else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
       // YOU WIN
       this.theResult = 0;
       let sound = new Howl({
        src: ['../../assets/win.mp3']
          });

       sound.play()
       this.scores[0] = this.scores[0]+1;
     }
     else{
       // YOU LOSE
       this.theResult = 1;
       let sound = new Howl({
        src: ['../../assets/fail-buzzer-03.mp3']
          });

       sound.play()
         this.scores[1] = this.scores[1]+1;
     }
  }
  reset(): void {
    this.enemySelected = -1;
    this.playerSelected = -1;
    this.scores = [0,0];
   } 

}
