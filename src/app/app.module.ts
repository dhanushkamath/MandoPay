import { CheckinService } from './checkin.service';
import { SpeechRecognitionService } from './speech.service';
import { AuthGuard } from './auth.guard';
import { TransactionsService } from './transactions.service';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterinfoComponent } from './footerinfo/footerinfo.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { SpeechComponent } from './speech/speech.component';
import { OfferCardsComponent } from './offer-cards/offer-cards.component';
import { CheckinComponent } from './checkin/checkin.component';
import { TransferService } from './transfer-service.service';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FinancesComponent } from './finances/finances.component';
import { InvestmentsComponent } from './investments/investments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginformComponent,
    FooterinfoComponent,
    GetintouchComponent,
    TransactionsComponent,
    LoginpageComponent,
    SpeechComponent,
    OfferCardsComponent,
    CheckinComponent,
    ChatbotComponent,
    FinancesComponent,
    InvestmentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, SpeechRecognitionService,TransactionsService, CheckinService, TransferService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
