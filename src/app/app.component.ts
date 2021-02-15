import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_APP } from '@app/app.actions';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-architect-test';
  
  /**
   *
   */
  constructor(private readonly store: Store) {
    environment.basepath = 'http://hola.com'
  }

  ngOnInit() {
    this.store.dispatch(LOAD_APP());
  }
}
