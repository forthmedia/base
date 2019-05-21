import { Component, OnInit } from '@angular/core';
import { ManticService } from '../services/mantic.service';
import { SyncAsync } from '@angular/compiler/src/util';

@Component({
  selector: 'test-bed',
  templateUrl: './test-bed.component.html',
  styleUrls: ['./test-bed.component.scss']
})
export class TestBedComponent implements OnInit {

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

function looper(num) {
  for (var i = 0; i < num; i++) {

    (function(j){
      say(j);
    })(i);

  }
}

function say(j) {
  var interval = j * 1000;
  setTimeout(function() {
    console.log("The value of i is " + j);
  }, interval);
}
