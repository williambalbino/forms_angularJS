import { FilmeService } from './filme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CpfDirective } from './cpf.directive';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { PokemonsService } from './pokemons.service';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';

const rotas: Routes = [
  { path: 'filmes', component: ListaFilmesComponent },
  { path: 'filmes/novo', component: FilmeFormComponent },
  { path: 'filmes/:id', component: DetalheFilmeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: '',
    redirectTo: '/filmes/novo',
    pathMatch: 'full'
  },
  { path: '**', component: PaginaNaoEncontradaComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    CpfDirective,
    MenuTopoComponent,
    PaginaNaoEncontradaComponent,
    PokemonsComponent,
    FilmeFormComponent,
    ListaFilmesComponent,
    DetalheFilmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    FilmeService, 
    PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
