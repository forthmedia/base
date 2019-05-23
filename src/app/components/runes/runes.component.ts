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
  runes: string = '\xa0';
  lots: Array<string> = [
    'f', 'u', 't', 'a', 'r', 'c', 'g', 'w',
    'h', 'n', 'i', 'j', 'y', 'p', 'z', 's',
    't', 'b', 'e', 'm', 'l', 'q', 'd', 'o'
  ];

  constructor() { }

  ngOnInit() {
    this.manticService = new ManticService;
    this.posibilities = this.manticService.permutation(24, 3);
    this.intro();
  }

  onCast() {
    this.runes = '\xa0';
    let one: number = -1;
    let two: number = -1;
    let three: number = -1;

    for (let i = 0; i < 3; i++) {
      let interval = (i+1) * 1000;
      if (i == 1) {
        one = Math.floor(Math.random() * 24);
        setTimeout(()=> this.runes += this.lots[one], interval);
      } else if (i == 2) {
        do {
          two = Math.floor(Math.random() * 24);
        } while (two == one);
        setTimeout(()=> this.runes += this.lots[two], interval);
      } else {
        do {
          three = Math.floor(Math.random() * 24);
        } while ((three == one) || (three == two));
        setTimeout(()=> this.runes += this.lots[three], interval);
      }
    }
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
