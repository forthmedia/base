import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-bed',
  templateUrl: './test-bed.component.html',
  styleUrls: ['./test-bed.component.scss']
})
export class TestBedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
