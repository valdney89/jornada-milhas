import { NgModule } from '@angular/core';
import { BuscaComponent } from './busca.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { buscaReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { BuscaEffects } from './store/effects';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BuscaComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('busca', buscaReducer),
    EffectsModule.forFeature([BuscaEffects])
  ],
})
export class BuscaModule {}
