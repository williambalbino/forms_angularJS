import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Filme } from '../model/filme';
import { FilmeService } from '../filme.service'; 

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {
  filme: Filme;

  constructor(public filmeService: FilmeService, 
              public router: Router, 
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.filme = this.filmeService.getFilme(+params['id']);
    });
  }
}
