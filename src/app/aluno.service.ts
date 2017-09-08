import { Injectable } from '@angular/core';
import { Aluno } from './model/aluno';

@Injectable()
export class AlunoService {
  proximoId: number = 0;
  alunos: Aluno[] = [];

  constructor() {
    this.adicionaAluno(new Aluno('Fulano de Tal', '53381652605', 'Sistemas', 'fulano@email.com'));
    this.adicionaAluno(new Aluno('Cicrano', '97064885883', 'Arquitetura', 'cicrano@email.com'));
    this.adicionaAluno(new Aluno('Beltrano', '97064885883', 'Arquitetura', 'cicrano@email.com'));
  }

  adicionaAluno(aluno: Aluno): void {
    aluno.id = this.proximoId++;
    this.alunos.push(aluno);
  }

  getAluno(id: number): Aluno {
    let index = this.alunos.findIndex((aluno: Aluno) => aluno.id === id);
    return (index >= 0) ? this.alunos[index] : null;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  alteraAluno(id: number, aluno: Aluno): void {
    let index = this.alunos.findIndex((aluno: Aluno) => aluno.id === id);
    if (index >= 0) {
      this.alunos[index] = aluno;
    }
  }

  removeAluno(id: number): void {
    let index = this.alunos.findIndex((aluno: Aluno) => aluno.id === id);
    if (index >= 0) {
      this.alunos.splice(index, 1);
    }
  }
}
