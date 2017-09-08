
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';
import { AlunoService } from './aluno.service';
import { Aluno } from './model/aluno';

@Directive({
  selector: '[cpf]',
  providers: [{provide: NG_VALIDATORS, useExisting: CpfDirective, multi: true}]
})
export class CpfDirective implements Validator {
  constructor(public alunoService: AlunoService) {}

  validate(control: AbstractControl): { [key: string]: any; } {
    if (!this.testaCPF(control.value)) {
      return {'cpf': {value: control.value}};
    } else if (this.cpfRepetido(control.value)) {
      return {'cpfRepetido': {value: control.value}};
    } else {
      return null;
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
    // Faz nada
  }

  testaCPF(cpf): boolean {
    let soma: number = 0;
    let resto: number;

    if (cpf === null || cpf === "00000000000") return false;    
    for (let i = 1; i < 10; i++) soma += +(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto == 11)) resto = 0;
    if (resto != +(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i < 11; i++) soma += + +(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto != +(cpf.substring(10, 11))) return false;
    return true;
  }

  cpfRepetido(cpf): boolean {
    return this.alunoService.getAlunos().findIndex((aluno: Aluno) => aluno.cpf === cpf) >= 0;
  }
}
