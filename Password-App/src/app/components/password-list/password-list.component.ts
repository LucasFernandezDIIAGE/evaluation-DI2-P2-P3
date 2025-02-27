import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Password } from '../../models/passwords/password';
import { AddPasswordComponent } from '../add-password/add-password.component';
import { PasswordsService } from '../../services/passwords-service/passwords.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-list',
  standalone: true,
  imports: [
    NgbDropdownModule,
    ReactiveFormsModule,
    CommonModule,
    AddPasswordComponent,
    RouterLink
  ],
  templateUrl: './password-list.component.html',
  styleUrl: './password-list.component.scss'
})
export class PasswordListComponent implements OnInit {

  PasswordsList: Password[] = []

  constructor(
    private passwordsService: PasswordsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getPasswords();
  }

  getPasswords() {
    const appId = this.route.snapshot.params['appId'];
    if (appId) {
      this.passwordsService.getPasswordsByApplicationId(appId).subscribe(
        (data: Password[]) => {
          this.PasswordsList = data;
        },
        (error: Error) => {
          console.error('Erreur lors de la récupération des mots de passe:', error);
        }
      );
    } else {
      this.passwordsService.getPasswords().subscribe(
        (data: Password[]) => {
          this.PasswordsList = data;
          console.log(this.PasswordsList);
        },
        (error: Error) => {
          console.error('Erreur lors de la récupération des mots de passe:', error);
        }
      );
    }
  }

  private modalService = inject(NgbModal)
  
  
      openLg(content: TemplateRef<any>) {
        this.modalService.open(content, { size: 'lg' });
      }

      addPassword(password: Password) {
        
      }
}
