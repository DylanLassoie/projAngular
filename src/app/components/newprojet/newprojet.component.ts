import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjetsService} from '../../services/projets.service';
import {Projet} from '../../entities/projet.entities';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-newprojet',
  templateUrl: './newprojet.component.html',
  styleUrls: ['./newprojet.component.css']
})

export class NewprojetComponent implements OnInit {

  @Input() dis?: FormGroup;
  @Output() newProjet = new EventEmitter<Projet>();
  projetFormGroup?: FormGroup;
  submitted = false;
  proj?: Projet;

  constructor(private fb: FormBuilder, private projetService: ProjetsService) {
  }

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      nom: ["", Validators.required],
      datedebut: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      datefin: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      cout: ["", Validators.required],
    });
  }

  onSaveProjet() {
    var nproj = this.projetFormGroup?.value;
    nproj.discipline = this.dis?.value;
    this.projetService.save(nproj).subscribe(data => {
        alert('sauvegarde ok');
        this.proj = data;
        this.newProjet.emit(data)
      },
      err => {
        alert(err.headers.get("error"));
      });
  }


}



