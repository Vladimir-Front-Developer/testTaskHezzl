import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RegistrationFormStateI, registrationReducer, registrtionNode } from './registration/registration.reducer';

export interface State {
  [registrtionNode]: RegistrationFormStateI
}

export const reducers: ActionReducerMap<State> = {
  [registrtionNode]: registrationReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
