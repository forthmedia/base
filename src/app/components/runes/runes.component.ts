import { Component, OnInit } from '@angular/core';
import { ManticService } from '../../services/mantic.service';

@Component({
  selector: 'runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

  manticService:ManticService;
  posibilities: number;
  runes: string = "";


  constructor() { }

  ngOnInit() {
    this.manticService = new ManticService;
    this.posibilities = this.manticService.permutation(24, 3);
    this.intro();
  }

  intro() {
    var symbols: string = "futark";
    symbols.split('');
    for (let i = 0; i < symbols.length; i++) {
      var interval = i * 1000;
      setTimeout(()=> this.runes += symbols[i], interval);
    }
  }
}
