import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Application } from '../../models/applications/application';
import { AppType } from '../../models/appTypes/appType';
import { ApplicationsService } from '../../services/applications-service/applications.service';

@Component({
  selector: 'app-add-application',
  standalone: true,
  imports: [
    NgbDropdownModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent {

  constructor(
    private applicationsService: ApplicationsService
  ) {}

  applicationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl(AppType.Professionnel, Validators.required),
  });

  appTypeEnum = AppType;

  setAppType(type: AppType) {
    this.applicationForm.get('type')?.setValue(type);
  }

  onSubmit() {
    var application: Application = {
      id: 0,
      name: this.applicationForm.get('name')?.value || '',
      type: this.applicationForm.get('type')?.value || AppType.Professionnel
    };
    this.applicationsService.addApplication(application).subscribe({
      next: () => console.log('Application ajoutée avec succès'),
  })
}
}
