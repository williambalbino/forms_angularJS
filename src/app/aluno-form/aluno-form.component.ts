import { Component } from '@angular/core';
import { Aluno } from '../model/aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent {
  cursos = ['Sistemas', 'Jogos', 'Arquitetura', 'Enfermagem'];
  model: Aluno;
  enviado = false;  

  constructor(public alunoService: AlunoService) {
    this.novoAluno();
  }
  
  enviar() { 
    this.alunoService.adicionaAluno(this.model);
    this.enviado = true;
  }

  novoAluno() {
    this.model = new Aluno('', '', '', '');
  }
}
