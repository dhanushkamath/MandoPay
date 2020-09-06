import { SpeechRecognitionService } from './../speech.service';
import { TransactionsService } from './../transactions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions = []
  constructor(private transactionsService: TransactionsService,
              private router: Router, private speech: SpeechRecognitionService) { }

  ngOnInit() {
    this.transactionsService.getTransactions()
    .subscribe(
      res => {
        this.transactions = res;
      },
      err => {
        console.log(err)
        if (err instanceof HttpErrorResponse){
          this.router.navigate(['/login'])
        }
      }
    )
  }


}
