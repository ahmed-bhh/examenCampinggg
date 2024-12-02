import { Component } from '@angular/core';
import {Camping} from "../../Camping";
import {Router} from "@angular/router";
import {CampingSericeService} from "../camping-serice.service";

@Component({
  selector: 'app-list-camping',
  templateUrl: './list-camping.component.html',
  styleUrls: ['./list-camping.component.css']
})
export class ListCampingComponent {
  stages: Camping[] = [];
  stagesFiltred: Camping[] = [];

  constructor(private stageService: CampingSericeService,private router: Router) {
    this.stageService.getStages().subscribe({
      next: (stages) => {
        this.stages = stages;
        this.stagesFiltred = stages;

      },
      error: () => {
        alert('An error occurred while fetching stages');
      }
    });
  }

  deleteStage(id: string) {
    this.stageService.deleteStage(id).subscribe({
      next: () => {
        this.stagesFiltred = this.stagesFiltred.filter(stage => stage.id !== id);
      },
      error: () => {
        alert('An error occurred while deleting stage');
      }
    });
  }

  editStage(id: string) {
    this.router.navigate([`stage/edit/${id}`]);
  }

  onSearchTextChange(event: Event) {
    this.stagesFiltred = [];
    this.stages.forEach((element) => {
      if (element.description.includes((event.target as HTMLInputElement).value)) {
        this.stagesFiltred.push(element);
      }
    });
  }

  incrementNbreInteresse(stage: Camping) {
   // stage.nbrInteresse++;
    this.stageService.updateStage(stage).subscribe({
      next: () => this.stagesFiltred = this.stagesFiltred.map(v => v.id === stage.id ? stage : v),
      error: () => alert('Erreur lors de la mise à jour du stage')
    });
  }
}
