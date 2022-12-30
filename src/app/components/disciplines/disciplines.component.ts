import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DisciplinesService} from '../../services/disciplines.service';
import {Observable} from 'rxjs';
import {Discipline} from '../../entities/discipline.entities';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.css']
})

export class DisciplinesComponent implements OnInit {
  disciplines?: Discipline[];
  constructor(private disciplinesService: DisciplinesService, private router: Router) { }

  ngOnInit(): void { }

  onSearch(value: any) {
    this.disciplinesService.searchDiscipline(value.nom).subscribe(
      {
        next: data => {this.disciplines = data}
      });
  }

  onNewDiscipline() {  this.router.navigateByUrl('newDiscipline'); }

  onDelete(d: Discipline) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.disciplinesService.deleteDiscipline(d).subscribe(
        {
          next: data => {
            this.onSearch(d);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }

  onEdit(d: Discipline) { this.router.navigateByUrl('editDiscipline/'+d.iddiscipline); }
}
