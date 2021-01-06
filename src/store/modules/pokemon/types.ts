import { PokemonTypes } from "src/types";

export interface CommonObject {
  name: string;
  url: string;
}

export interface Abilities {
  ability: CommonObject;
  is_hidden: boolean;
  slot: number;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: CommonObject;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Type {
  name: PokemonTypes;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string | null;
  abilities: Abilities[];
  stats: Stats[];
  types: Types[];
  was_catched?: boolean;
}

export interface PokemonState {
  list: Pokemon[];
}

export interface Action {
  type: ActionType;
  payload: Payload;
}

export enum ActionType {
  SET_POKEMON_LIST = "SET_POKEMON_LIST",
  POKEMON_WAS_CATCHED = "POKEMON_WAS_CATCHED",
}

export interface Payload {
  id: number;
  pokemons: Pokemon[];
}