import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Discipline} from '../entities/discipline.entities';
import {Projet} from '../entities/projet.entities';
import {formatDate} from '@angular/common';

@Injectable({providedIn:"root"})

export class ProjetsService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  getProjet(idprojet: number): Observable<Projet> {
    return this.http.get<Projet>(this.host + '/projets/' + idprojet);
  }

  searchProjet(nom: string): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.host + '/projets/nom=' + nom);
  }

  searchCoutProjet(cout: number): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.host + '/projets/cout=' + cout);
  }

  getProjetDiscipline(iddiscipline: number) : Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + '/projets/iddiscipline=' + iddiscipline);
  }

  deleteProjet(p: Projet): Observable<void> {
    return this.http.delete<void>(this.host + '/projets/' + p.idprojet);
  }

  save(p: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.host + '/projets/', p);
  }

  updateProjet(p: Projet): Observable<Projet> {
    return this.http.put<Projet>(this.host + '/projets/' + p.idprojet, p);
  }
}
