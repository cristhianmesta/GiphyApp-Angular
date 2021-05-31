import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { GiphyModule } from './giphy/giphy.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GiphyModule,
    SharedModule,
  ],
  providers: 
  [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
