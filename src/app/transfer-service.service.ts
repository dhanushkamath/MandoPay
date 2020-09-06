import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(
    private router:Router
  ) { }

  private data;
  private i: number;

  setData(data,i){
    this.data = data;
    this.i = i;
  }

  getData(){
    let temp = this.data;
    let tempi = this.i;
    this.clearData();
    return [temp,tempi];
  }

  clearData(){
    this.data = undefined;
    this.i = undefined;
  }
}
