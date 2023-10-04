import { createReducer, on } from "@ngrx/store";
import { Destaques, Resultado } from "src/app/core/types/type";
import { BuscaActions } from "./actions";

export interface BuscaState {
  isLoading: boolean,
  passagens?: Resultado,
  destaques?: Destaques,
  error?: string,
}

export const initialState: BuscaState = {
  isLoading: false,
  passagens: undefined,
  destaques: undefined,
  error: undefined,
}

export const buscaReducer = createReducer(
  initialState,
  on(BuscaActions.getPassagens, (state) => ({...state, isLoading: true})),
  on(BuscaActions.getPassagensSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    passagens: action.passagens
  })),
  on(BuscaActions.getPassagensFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),
  on(BuscaActions.getPassagensDestaques, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(BuscaActions.getPassagensDestaquesSuccess, (state, action) => ({
    ...state,
    isLoading: true,
    destaques: action.destaques
  })),
);
