import { createActionGroup, props } from "@ngrx/store";
import { DadosBusca, Destaques, Passagem, Resultado } from "src/app/core/types/type";

export const BuscaActions = createActionGroup({
  source: 'Busca',
  events: {
    'Get Passagens': props<{ dadosBusca: DadosBusca }>(),
    'Get Passagens Success': props<{ passagens: Resultado }>(),
    'Get Passagens Failure': props<{ error: string }>(),
    'Get Passagens Destaques': props<{ passagens: Passagem[] }>(),
    'Get Passagens Destaques Success': props<{ destaques: Destaques }>(),
  }
})
