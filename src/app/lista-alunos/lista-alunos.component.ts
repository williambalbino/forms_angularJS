import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Aluno } from '../model/aluno';
import { AlunoService } from '../aluno.service'; 

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent {
  alunos: Aluno[];

  constructor(public alunoService: AlunoService, 
              public router: Router) {
    this.alunos = alunoService.getAlunos();
  }

  ver(aluno: Aluno): void {
    this.router.navigate(['/alunos', aluno.id]);
  }
}
