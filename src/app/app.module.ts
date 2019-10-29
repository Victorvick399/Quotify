import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { QuotelistComponent } from './quotelist/quotelist.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighliterDirective } from './highliter.directive';
import { GetdatePipe } from './getdate.pipe';;

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    ContactusComponent,
    HomeComponent,
    QuotelistComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighliterDirective,
    GetdatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
