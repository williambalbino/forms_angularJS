import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Filme } from '../model/filme';
import { FilmeService } from '../filme.service'; 

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent {
  filmes: Filme[];

  constructor(public filmeService: FilmeService, 
              public router: Router) {
    this.filmes = filmeService.getFilmes();
  }

  ver(filme: Filme): void {
    this.router.navigate(['/filmes', filme.id]);
  }
}
