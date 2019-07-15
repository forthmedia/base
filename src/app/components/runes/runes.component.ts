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
  hasCast: boolean;
  cast: Array<number>;
  fetched;

  constructor() {
    this.hasCast = false;
    this.cast = [];
    this.fetched = null;
  }

  ngOnInit() {
    this.manticService = new ManticService;
    this.posibilities = this.manticService.permutation(24, 3);
    this.intro();
    this.fetch().then(response => {
      //ES6 this
      this.fetched = response;
      console.debug("fetched response: ", this.fetched);
    });
  }

  onCast() {
    this.hasCast = false;
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
    //after the cast
    setTimeout(()=> this.setCast(one,two,three), 4000);
  }

  setCast(one, two, three) {
    this.cast = [];
    this.cast.push(one);
    this.cast.push(two);
    this.cast.push(three);
    this.hasCast = true;
  }

  onSave() {
    localStorage.clear();
    localStorage.setItem('one', this.cast[0].toString());
    localStorage.setItem('two', this.cast[1].toString());
    localStorage.setItem('three', this.cast[2].toString());
  }

  intro() {
    var symbols: string = "futark";
    symbols.split('');
    for (let i = 0; i < symbols.length; i++) {
      var interval = i * 1000;
      setTimeout(()=> this.runes += symbols[i], interval);
    }
  }

  fetch() {
    return new Promise((resolve, reject) => {
      // XHR
      var reqestURL = 'http://localhost:3000/runes';
      var request = new XMLHttpRequest();
      request.open('GET', reqestURL);  
      request.onload = ()=> {
        if (request.status == 200) {
          var response = request.response;
          var result = JSON.parse(response);
          resolve(result);
        } else {
          // reject with error text
          console.debug("fetch error: ", request.statusText);
          reject(Error(request.statusText));
        }
      }

      request.onerror = ()=> {
        reject(Error('Cannot fetch.'));
      }

      request.send();
    });
  }

}
