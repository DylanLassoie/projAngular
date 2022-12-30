import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjetsService} from '../../services/projets.service';
import {Observable} from 'rxjs';
import {Projet} from '../../entities/projet.entities';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})

export class ProjetsComponent implements OnInit {
  projets?: Projet[];
  constructor(private projetsService: ProjetsService, private router: Router) { }

  ngOnInit(): void { }

  onSearch(value: any) {
    this.projetsService.searchProjet(value.nom).subscribe(
      {
        next: data => {this.projets = data}
      });
  }

  onNewProjet() {  this.router.navigateByUrl('newProjet'); }

  onDelete(p: Projet) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.projetsService.deleteProjet(p).subscribe(
        {
          next: data => {
            this.onSearch(p);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }

  onEdit(p: Projet) { this.router.navigateByUrl('editProjet/'+p.idprojet); }
}
