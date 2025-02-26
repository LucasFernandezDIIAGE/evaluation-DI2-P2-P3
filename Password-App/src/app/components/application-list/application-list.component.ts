import { Component, inject, TemplateRef } from '@angular/core';
import { Application } from '../../models/applications/application';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddApplicationComponent } from '../add-application/add-application.component';

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
export class ApplicationListComponent {

  private modalService = inject(NgbModal)

  AppList: Application[] = [
      {application_id:1, application_name: "Youtube", application_type:0},
      {application_id:2, application_name: "Google", application_type:1},
      {application_id:3, application_name: "Destiny2", application_type:0},
    ];


    openLg(content: TemplateRef<any>) {
      this.modalService.open(content, { size: 'lg' });
    }
}
