import {Component, Input, OnInit} from '@angular/core';
import {ProjetsService} from '../../services/projets.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Projet} from '../../entities/projet.entities';

@Component({
  selector: 'app-editprojet',
  templateUrl: './editprojet.component.html',
  styleUrls: ['./editprojet.component.css']
})

export class EditprojetComponent implements OnInit {
  projetFormGroup?: FormGroup;
  submitted=false;
  @Input() projet?:Projet;
  deleted=false;
  constructor(private projetService: ProjetsService, private fb:
    FormBuilder) {}

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      idprojet: [this.projet?.idprojet],
      nom: [this.projet?.nom, Validators.required],
      datedebut: [this.projet?.datedebut, Validators.required],
      datefin: [this.projet?.datefin, Validators.required],
      cout: [this.projet?.cout,Validators.required]
  });
  }

  onUpdateProjet(): void {
    this.submitted = true;
    if (this.projetFormGroup?.invalid) {
      return;
    }
    let projetmaj:Projet=this.projetFormGroup?.value;
    if(this.projet) {
      projetmaj.discipline = this.projet.discipline;
      this.projetService.updateProjet(projetmaj).subscribe({
        next: data => alert('maj ok'),
        error : err => alert(err.headers.get("error"))
      })
    }
  }

  onDeleteProjet() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.projetService.deleteProjet(this.projetFormGroup?.value).
      subscribe(data => {
          alert('effacement ok');
          this.deleted=true;
        },
        err => {alert(err.headers.get("error"));
        });
    }
  }
}

