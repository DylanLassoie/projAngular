import {Discipline} from './discipline.entities';
export interface Projet {
  idprojet: number;
  nom:  string;
  datedebut:  string;
  datefin:  string;
  cout: number;
  discipline: Discipline;
}
