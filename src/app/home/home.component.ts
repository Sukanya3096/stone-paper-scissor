import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from '../play.service';
import { StonePaperComponent } from '../stone-paper/stone-paper.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  name: string;

  constructor(public playService: PlayService) { }

  ngOnInit() {
  }
  play(){
    this.playService.name = this.name;
  }


}

