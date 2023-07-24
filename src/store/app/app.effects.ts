import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getData, getDataSuccess, helloWorld, loadHelloWorld} from "./app.actions";
import {concatMap, delay, of} from "rxjs";
import {map} from "rxjs/operators";
import { DataService } from "src/app/data.service";

@Injectable()
export class AppEffects {

  loadHelloWorldMessage = createEffect(() => this.actions$.pipe(
      ofType(loadHelloWorld),
      concatMap(_ => of("Hello world from fake server").pipe(delay(1000))),
      map(message => helloWorld({message}))
    )
  );

  loadData = createEffect(() => this.actions$.pipe(
      ofType(getData),
      concatMap(_ => this.dataService.getData()),
      map(data => getDataSuccess({data}))
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
