import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ContactComponent } from './contact/contact.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { QuotelistComponent } from './quotelist/quotelist.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    ContactComponent,
    ContactusComponent,
    HomeComponent,
    QuotelistComponent
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
