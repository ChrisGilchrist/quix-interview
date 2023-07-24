import { Component } from '@angular/core';
import {AppState} from "../store/app/app.reducer";
import {select, Store} from "@ngrx/store";
import {Observable, tap} from "rxjs";
import {getData, helloWorld, loadHelloWorld} from "../store/app/app.actions";
import {selectData, selectMessage} from "../store/app/app.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: Observable<string>;
  data: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.message = this.store.pipe(select(selectMessage));
    this.data = this.store.pipe(select(selectData));
  }

  public helloWorld(){
    this.store.dispatch(helloWorld({message: "Hello world"}));
  }

  public helloWorldFromServer(){
    this.store.dispatch(loadHelloWorld());
  }

  public getData(){
    this.store.dispatch(getData());
  }
}
