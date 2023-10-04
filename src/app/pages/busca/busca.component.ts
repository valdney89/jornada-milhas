import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { DadosBusca, Destaques, Passagem } from 'src/app/core/types/type';
import { Store } from '@ngrx/store';
import { BuscaActions } from './store/actions';
import { selectDestaques, selectPassagens } from './store/selectors';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  passagens$!: Observable<Passagem[] | undefined>;
  destaques$!: Observable<Destaques | undefined>;

  constructor(
    private formBuscaService: FormBuscaService,
    private store: Store
  ) { }
  ngOnInit(): void {
    this.passagens$ = this.store.select(selectPassagens);
    this.destaques$ = this.store.select(selectDestaques);

    const buscaPadrao : DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    }

    const dadosBusca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosBusca() : buscaPadrao;
    this.store.dispatch(BuscaActions.getPassagens({ dadosBusca }));
  }
  busca(ev: DadosBusca) {
    this.store.dispatch(BuscaActions.getPassagens({ dadosBusca: ev}))
  }
}
