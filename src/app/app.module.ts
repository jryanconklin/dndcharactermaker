import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  // Add apiKey to .Env File and Obscure?
  apiKey: "AIzaSyCOB2eepNH4Xp2TCqpKKWrr7G1UqcuJATs",
   authDomain: "dndcharactercreator-1b7d3.firebaseapp.com",
   databaseURL: "https://dndcharactercreator-1b7d3.firebaseio.com",
   storageBucket: "dndcharactercreator-1b7d3.appspot.com",
   messagingSenderId: "623544075227"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
