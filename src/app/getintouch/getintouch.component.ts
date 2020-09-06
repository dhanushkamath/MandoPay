import { Component, OnInit } from '@angular/core';

var M = require('materialize-css')

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetintouchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Datepicker.init(document.querySelector('.datepicker'), []);
    
  }
  
}
