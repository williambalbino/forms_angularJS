export class Aluno {
  id: number;

  constructor(
    public nome: string,
    public cpf: string,
    public curso: string,
    public email?: string
  ) {  }
}