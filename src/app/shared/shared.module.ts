import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BannerComponent } from './banner/banner.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardComponent } from './card/card.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { ContainerComponent } from './container/container.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { PassagemComponent } from './passagem/passagem.component';
import { PassagemDestaqueComponent } from './passagem-destaque/passagem-destaque.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { FiltrosComplementaresComponent } from './form-busca/filtros-complementares/filtros-complementares.component';
import { CompanhiasComponent } from './form-busca/filtros-complementares/companhias/companhias.component';
import { LabelComponent } from './form-busca/filtros-complementares/label/label.component';
import { ParadasComponent } from './form-busca/filtros-complementares/paradas/paradas.component';
import { PrecosComponent } from './form-busca/filtros-complementares/precos/precos.component';

export const materialModules = [
  MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSliderModule,
];

const sharedComponents = [
  BannerComponent,
  BotaoControleComponent,
  CardComponent,
  CardBuscaComponent,
  CardDepoimentoComponent,
  ContainerComponent,
  DropdownUfComponent,
  FooterComponent,
  FormBaseComponent,
  HeaderComponent,
  ModalComponent,
  PassagemComponent,
  PassagemDestaqueComponent,
  SeletorPassageiroComponent,
  FormBuscaComponent,
  FiltrosComplementaresComponent,
  CompanhiasComponent,
  LabelComponent,
  ParadasComponent,
  PrecosComponent,
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules,
    ...sharedComponents
  ],
})
export class SharedModule {}
