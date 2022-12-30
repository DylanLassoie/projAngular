import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DisciplinesService} from '../../services/disciplines.service';
import {ProjetsService} from '../../services/projets.service';
import {ActivatedRoute} from '@angular/router';
import {Projet} from "../../entities/projet.entities";

@Component({
  selector: 'app-editdiscipline',
  templateUrl: './editdiscipline.component.html',
  styleUrls: ['./editdiscipline.component.css']
})

export class EditdisciplineComponent implements OnInit {
  disciplineFormGroup?: FormGroup;
  submitted = false;
  idDiscipline: number;
  projets?: Projet[];

  constructor(private disciplineService: DisciplinesService, private projetService:
    ProjetsService, private fb: FormBuilder, activatedRoute: ActivatedRoute) {
    this.idDiscipline = activatedRoute.snapshot.params.iddiscipline;
  }

  ngOnInit(): void {
    this.disciplineService.getDiscipline(this.idDiscipline).subscribe(
      discipline => {
        this.disciplineFormGroup = this.fb.group({
          iddiscipline: [discipline.iddiscipline, Validators.required],
          nom: [discipline.nom, Validators.required],
          description: [discipline.description, Validators.required],
          niveau: [discipline.niveau,
            [Validators.required, Validators.min(1), Validators.max(10)]],
        })
      });
  }

  onUpdateDiscipline(): void {
    this.submitted = true;
    if (this.disciplineFormGroup?.invalid) {
      return;
    }

    this.disciplineService.updateDiscipline(this.disciplineFormGroup?.value).subscribe(data => {
        alert('maj ok')
      },
      err => {
        alert(err.headers.get("error"));
      });
  }

  onSeeProjets() {
    this.projetService.getProjetDiscipline(this.idDiscipline).subscribe(data => {
        this.projets = data
      },
      err => {
        alert(err.headers.get("error"));
      });
  }

  onAddProjet(proj: Projet) {
    this.projets?.push(proj);
  }
}

