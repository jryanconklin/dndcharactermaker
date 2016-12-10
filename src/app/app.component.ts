import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  models: FirebaseListObservable<any[]>;
  constructor(angularFire: AngularFire) {
    this.models = angularFire.database.list('characters');
  }
  // title = 'app still works!';
}
