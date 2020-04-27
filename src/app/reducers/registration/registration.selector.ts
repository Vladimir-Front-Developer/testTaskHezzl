import { createFeatureSelector, createSelector } from "@ngrx/store";
import { registrtionNode, RegistrationFormStateI } from './registration.reducer';

export const selectRegistrationFormFeature = createFeatureSelector<RegistrationFormStateI>(registrtionNode)

export const selectRegFormNameValid = createSelector(
    selectRegistrationFormFeature,
    (state: RegistrationFormStateI): boolean => state.name.validation
)

export const selectRegFormEmailValid = createSelector(
    selectRegistrationFormFeature,
    (state: RegistrationFormStateI): boolean => state.email.validation
)

export const selectRegFormPasswordValid = createSelector(
    selectRegistrationFormFeature,
    (state: RegistrationFormStateI): boolean => state.email.validation
)