import { ChatbotComponent } from './chatbot/chatbot.component';
import { CheckinComponent } from './checkin/checkin.component';
import { AuthGuard } from './auth.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'


const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'chatbot', component : ChatbotComponent},
  {path: 'locate', component : CheckinComponent},
  {path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginpageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
