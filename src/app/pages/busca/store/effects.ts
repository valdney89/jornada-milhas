import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { BuscaActions } from './actions';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Injectable()
export class BuscaEffects {
  constructor(
    private actions$: Actions,
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService,
  ){}

  getPassagens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuscaActions.getPassagens),
      switchMap(({ dadosBusca }) => {
        return this.passagensService.getPassagens(dadosBusca).pipe(
          map((passagens) => BuscaActions.getPassagensSuccess({ passagens })),
          catchError((error) => of(BuscaActions.getPassagensFailure({ error: error.message })))
        )
      })
    )
  )

  getPassagensSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuscaActions.getPassagensSuccess),
      tap(({ passagens }) => {
        this.formBuscaService.formBusca.patchValue({
          precoMin: passagens.precoMin,
          precoMax: passagens.precoMax,
        })
      }),
      map(({ passagens }) => BuscaActions.getPassagensDestaques({passagens: passagens.resultado}))
    )
  )

  getPassagensDestaques$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuscaActions.getPassagensDestaques),
      mergeMap(({ passagens }) => {
        const destaques = this.passagensService.obterPassagensDestaques(passagens);
        if (destaques) {
          return [
            BuscaActions.getPassagensDestaquesSuccess({ destaques: destaques }),
          ];
        }
        return [];
      })
    )
  )
}
