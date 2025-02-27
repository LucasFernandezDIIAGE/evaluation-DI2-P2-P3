import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Application } from '../../models/applications/application';
import { PasswordsService } from '../../services/passwords-service/passwords.service';
import { Password } from '../../models/passwords/password';
import { ApplicationsService } from '../../services/applications-service/applications.service';

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
export class AddPasswordComponent implements OnInit {

  AppList: Application[] = []
  constructor(
    private passwordsService: PasswordsService,
    private applicationsService: ApplicationsService
  )
  {}

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications(): void {
    this.applicationsService.getApplications().subscribe(
      (data: Application[]) => {
        this.AppList = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des applications:', error);
      }
    );
  }
  

  passwordForm = new FormGroup({
    accountName: new FormControl('', Validators.required),
    applicationId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  setAppSelector(application: Application) {
    this.passwordForm.get('applicationId')?.setValue(application.id.toString());
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Formulaire soumis avec succès', this.passwordForm.value);
  
      const password = new Password(
        0,
        this.passwordForm.get('password')?.value || '',
        this.passwordForm.get('accountName')?.value || '',
        Number(this.passwordForm.get('applicationId')?.value || ''),
      );
  
      this.passwordsService.addPassword(password).subscribe({
        next: () => console.log('Mot de passe ajouté avec succès'),
        error: (err: any) => console.error('Erreur lors de l\'ajout du mot de passe', err),
      });
  
    } else {
      console.log('Le formulaire est invalide');
    }
  }
  
}
