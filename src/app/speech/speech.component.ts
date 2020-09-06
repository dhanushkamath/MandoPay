import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech.service';
import { Router } from '@angular/router';


interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})


export class SpeechComponent implements OnInit {

  mic_status: string;
  pulse_status: string;

  speechData: string;
  speechActive: boolean;

  constructor(private speechRecognitionService: SpeechRecognitionService, private router: Router, private authService: AuthService) {
    this.mic_status = 'mic'
    this.speechActive = false;
    this.speechData = '';
}

  ngOnInit() {
  }

  ngOnDestroy() {
      this.speechRecognitionService.DestroySpeechObject();
  }

  toggleSpeech(): void {
      this.speechActive = true;
      this.pulse_status = 'pulse';

      var audio = new Audio();
      audio.src = '../../assets/sounds/pop_drip.wav'
      audio.load()
      audio.play()

      this.speechRecognitionService.record()
          .subscribe(
          //listener
          (value) => {
              this.speechData = value;
              console.log("Recognition: " + this.speechData);
              console.log(this.speechData.split(" "))
              this.speechActive = false;
              this.pulse_status = '';
              this.navigate();

          },
          //errror
          (err) => {
              console.log(err);

          },
          //completion
          () => {
              console.log("--complete--");
          });
  }

  navigate(): void {
      this.speechData.split(" ").forEach( (term) => {
        if (['transactions', 'login', 'home', 'locate'].indexOf(term) > -1) {
          console.log(term);
          this.router.navigate([`/${term}`]);
        }
        else if (term == "logout" && this.authService.loggedIn()){
          this.authService.logoutUser()
        }
        else if (['checkin', 'checking', 'check'].indexOf(term) > -1) {
          console.log("Check",term);
          this.router.navigate(['/checkin']);
        }
        else if (['chatbot', 'chat', 'talk'].indexOf(term) > -1) {
          console.log("Chatbot",term);
          this.router.navigate(['/chatbot']);
        }else if (['assistance', 'help'].indexOf(term) > -1) {
          console.log("Check",term);
          this.router.navigate(['/NotifyExecutive']);
        }

      })
  }

}

