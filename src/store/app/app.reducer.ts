import {createReducer, on} from '@ngrx/store';
import {getDataSuccess, helloWorld, loadHelloWorld} from "./app.actions";


 export interface AppState {
  message?:string;
}

export const initialState : AppState = {
}

const _appReducer = createReducer(
  initialState,
  on(helloWorld, (state, payload) => ({...state, message: payload.message })),
  on(loadHelloWorld, (state) => ({...state, message: "Loading..." })),

  on(getDataSuccess, (state, payload) => ({...state, data: payload.data })),
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
