import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeModule } from './components/liste/liste.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListeModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
