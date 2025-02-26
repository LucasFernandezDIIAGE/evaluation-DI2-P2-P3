import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { Application } from '../../models/applications/application';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddApplicationComponent } from '../add-application/add-application.component';
import { ApplicationsService } from '../../services/applications-service/applications.service';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    NgbDropdownModule,
    ReactiveFormsModule,
    CommonModule,
    AddApplicationComponent
  ],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.scss'
})
export class ApplicationListComponent implements OnInit {
  
  AppList: Application[] = []


  constructor(
    private applicationsService: ApplicationsService
  ) {}

  private modalService = inject(NgbModal)

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications(): void {
    this.applicationsService.getApplications().subscribe(
      (data: Application[]) => {
        this.AppList = data;  // Mise à jour de AppList après récupération des données
      },
      (error) => {
        console.error('Erreur lors de la récupération des applications:', error);
      }
    );
  }

    openLg(content: TemplateRef<any>) {
      this.modalService.open(content, { size: 'lg' });
    }
}
