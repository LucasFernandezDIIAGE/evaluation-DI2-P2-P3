import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Application } from '../../models/applications/application';

@Component({
  selector: 'app-add-password',
  standalone: true,
  imports: [
    NgbDropdownModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent {
  AppList: Application[] = [
    {application_id:1, application_name: "Youtube", application_type: 1},
    {application_id:2, application_name: "Google", application_type: 1},
    {application_id:3, application_name: "Destiny2", application_type: 1},
  ];

  passwordForm = new FormGroup({
    accountName: new FormControl('', Validators.required),
    appSelector: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  setAppSelector(application: Application) {
    this.passwordForm.get('appSelector')?.setValue(application.application_id.toString());
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Formulaire soumis avec succès', this.passwordForm.value);
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
