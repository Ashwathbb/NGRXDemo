


import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel } from "../Model/Associate.model";


/***
 * after registration effects and reducer in module final thing is get data from selectors
 * getdat we are using createfeatureselector 
 * after that goto component.ts file we have to dispath with thw help of injecting store 
 */
const getassociatestate=createFeatureSelector<AssociateModel>('associate');

export const getassociatelist=createSelector(getassociatestate,(state)=>
{
        return state.list;
 })
export const getassociate = createSelector(getassociatestate, (state) => {
        return state.associateobj;
})