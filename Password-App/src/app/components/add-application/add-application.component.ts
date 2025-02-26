import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Application } from '../../models/applications/application';
import { AppType } from '../../models/appTypes/appType';

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

  // Utilisation de l'énumération pour définir la valeur par défaut et les options du type
  applicationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl(AppType.Professionnel, Validators.required),  // Valeur par défaut définie par l'enum
  });

  appTypeEnum = AppType;  // Ajouter une référence à l'énumération pour l'afficher dans le template

  setAppType(type: AppType) {
    this.applicationForm.get('type')?.setValue(type);
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      console.log('Formulaire soumis avec succès', this.applicationForm.value);
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
