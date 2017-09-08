import { Component } from '@angular/core';

import { Pokemon } from '../model/pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  carregando: boolean = true;

  constructor(public pokemonsService: PokemonsService) {
    this.carregando = true;

    pokemonsService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.carregando = false;
    });
  }
}
