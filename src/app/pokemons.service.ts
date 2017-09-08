import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Pokemon } from './model/Pokemon';

@Injectable()
export class PokemonsService {
  static readonly POKEDEX_URI = 'http://pokeapi.co/api/v1/pokedex/1/';

  constructor(public http: Http) { }

  getPokemons() { // Retorna todos os pokemons
    return this.http.get(PokemonsService.POKEDEX_URI)
           .map((result) => result.json().pokemon.map((obj) => {
             return new Pokemon(obj.name, obj.resource_uri);
           }));
  }

  getPokemon(id) { // Retorna os detalhes de um pokemon específico
    return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
           .map((result) => result.json());
  }
}
