import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Aluno } from '../model/aluno';
import { AlunoService } from '../aluno.service'; 

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})
export class DetalheAlunoComponent implements OnInit {
  aluno: Aluno;

  constructor(public alunoService: AlunoService, 
              public router: Router, 
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.aluno = this.alunoService.getAluno(+params['id']);
    });
  }
}
