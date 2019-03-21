import { Component, OnInit } from '@angular/core';
import { Mytrip } from './mytrip';
import { TRIPS } from './mock-trips';
@Component({
  selector: 'app-mytrip',
  templateUrl: './mytrip.component.html',
  styleUrls: ['./mytrip.component.css']
})
export class MytripComponent implements OnInit {

  trip1: Mytrip = {
    id: 1,
    name: 'Phu Quoc Island'
  };

  trips = TRIPS;

  constructor() { }

  ngOnInit() {
  }


}
