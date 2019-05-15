import { Component, OnInit } from '@angular/core';
import { ManticService } from '../services/mantic.service';

@Component({
  selector: 'test-bed',
  templateUrl: './test-bed.component.html',
  styleUrls: ['./test-bed.component.scss']
})
export class TestBedComponent implements OnInit {

  manticService:ManticService;
  posibilities: number;

  constructor() { }

  ngOnInit() {
    this.manticService = new ManticService;
    this.posibilities = this.manticService.permutation(24, 3);
  }

}
