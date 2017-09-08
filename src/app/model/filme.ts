export class Filme{
    id:number;

    constructor(
        public nome:string,
        public ano: string,
        public genero: string,
        public descricao?: string,
    ){}
}