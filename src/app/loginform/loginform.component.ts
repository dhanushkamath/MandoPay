import { SpeechRecognitionService } from './../speech.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  userData = {}

  constructor(private authService: AuthService,
              private router: Router,
              private speech: SpeechRecognitionService) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.loginUser(this.userData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/transactions'])
      },
      err => console.log(err)
    )
  }

}
