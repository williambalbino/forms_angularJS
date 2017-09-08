import { Filme } from './model/filme';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmeService {

  proximoId: number = 0;
  filmes: Filme[] = [];

  constructor() {
    this.adicionaFilme(new Filme('X-men', '2003', 'Ação'));
    this.adicionaFilme(new Filme('Titanic', '2000', 'Drama'));
    this.adicionaFilme(new Filme('O Chamado', '1998', 'Terror'));
  }

  adicionaFilme(filme: Filme): void {
    filme.id = this.proximoId++;
    this.filmes.push(filme);
  }

  getFilme(id: number): Filme {
    let index = this.filmes.findIndex((filme: Filme) => filme.id === id);
    return (index >= 0) ? this.filmes[index] : null;
  }

  getFilmes(): Filme[] {
    return this.filmes;
  }

  alterafilme(id: number, filme: Filme): void {
    let index = this.filmes.findIndex((filme: Filme) => filme.id === id);
    if (index >= 0) {
      this.filmes[index] = filme;
    }
  }

  removefilme(id: number): void {
    let index = this.filmes.findIndex((filme: Filme) => filme.id === id);
    if (index >= 0) {
      this.filmes.splice(index, 1);
    }
  }

}
