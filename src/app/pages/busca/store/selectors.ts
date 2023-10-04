import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BuscaState } from "./reducers";

const selectFeature = createFeatureSelector<BuscaState>('busca');

export const selectResultado = createSelector(selectFeature, (state) => state.passagens);
export const selectPassagens = createSelector(selectFeature, (state) => state.passagens?.resultado);
export const selectPrecoMin = createSelector(selectFeature, (state) => state.passagens?.precoMin);
export const selectPrecoMAx = createSelector(selectFeature, (state) => state.passagens?.precoMax);
export const selectDestaques = createSelector(selectFeature, (state) => state.destaques);
