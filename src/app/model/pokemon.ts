export class Pokemon {
  id: number;
  imagem: string;

  constructor(public nome: string, public uri: string) {
    this.id = +(this.uri.split('/')[3]);
    this.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }
}