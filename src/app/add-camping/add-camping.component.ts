import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CampingSericeService} from "../camping-serice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-camping',
  templateUrl: './add-camping.component.html',
  styleUrls: ['./add-camping.component.css']
})
/*
*
* export class Camping {
  id!:string;
  description!: string;
  nbPlace!:number;
  dateDebut!: string;
  dateFin!: string;
  etat!:boolean;
}*/
export class AddCampingComponent {
  stage: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required,Validators.minLength(3)]),
    nbPlace:new FormControl(0, [Validators.required]),
    dateDebut: new FormControl('', [Validators.required,Validators.pattern(/^[A-Z].*/)]),
    dateFin: new FormControl('', [Validators.required,Validators.pattern(/^[A-Z].*/)]),
    etat: new FormControl(true),
  });

  stageId;

  constructor(private stageService: CampingSericeService, private activatedRouter: ActivatedRoute,private router: Router) {
    this.stageId = this.activatedRouter.snapshot.params["id"] || undefined
    if(this.stageId !== undefined) {
      this.stageService.getStageById(this.stageId).subscribe({
        next: (stage) => {
          this.stage.patchValue({
            description: stage.description,
            nbPlace: stage.nbPlace,
            dateDebut: stage.dateDebut,
            dateFin: stage.dateFin,
            etat: stage.etat,
          });
        },
        error: () => {
          alert('An error occurred while fetching stage');
        }
      });
    }
  }
  save() {
    if(this.stageId !== undefined) {
      this.stageService.updateStage(this.stage.value).subscribe({
        next: () => {
          this.router.navigate(['/camping']);
        },
        error: () => {
          alert('An error occurred while updating stage');
        }
      });
    } else {
      this.stageService.addStage(this.stage.value).subscribe({
        next: () => {
          this.router.navigate(['/camping']);
        },
        error: () => {
          alert('An error occurred while adding stage');
        }
      });
    }
  }

  getButtonTitle():string {
    return this.stageId !== undefined ? 'Update' : 'Add';
  }
}
