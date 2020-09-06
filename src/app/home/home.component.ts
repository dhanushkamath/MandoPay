import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

var M = require('materialize-css')


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

    M.Tabs.init(document.querySelector('.tabs'), []);
    M.Parallax.init(document.getElementById('parallax-1'), [])
    M.Parallax.init(document.getElementById('parallax-2'), [])
  }

}
