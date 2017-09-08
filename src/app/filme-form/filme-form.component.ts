import { FilmeService } from './../filme.service';
import { Filme } from './../model/filme';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent {

  generos = ['Ação', 'Drama', 'Terror', 'Comédia'];
  model: Filme;
  enviado = false;  

  constructor(public filmeService: FilmeService) {
    this.novoFilme();
  }
  
  enviar() { 
    this.filmeService.adicionaFilme(this.model);
    this.enviado = true;
  }

  novoFilme() {
    this.model = new Filme('', '', '', '');
  }

}
