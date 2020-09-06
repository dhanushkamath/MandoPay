import { SpeechRecognitionService } from './../speech.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Injecting AuthService for accessing LoggedIn()
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
