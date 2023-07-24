import {createAction, props} from "@ngrx/store";

export const helloWorld = createAction('helloWorld', props<{message: string}>());

// Example of async hello world action.
export const loadHelloWorld = createAction('loadHelloWorld');


export const getData = createAction('[Data] get Data');
export const getDataSuccess = createAction('[Data] get Data sucess', props<{data: any}>());