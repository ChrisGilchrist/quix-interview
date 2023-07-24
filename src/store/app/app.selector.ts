import {createSelector} from "@ngrx/store";

const selectState = (state: any) => {
  return state.app;
};

export const selectMessage = createSelector(selectState, p => p?.message);

export const selectData = createSelector(selectState, p => p?.data);