import { Component, inject, TemplateRef } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Password } from '../../models/passwords/password';
import { AddPasswordComponent } from '../add-password/add-password.component';

@Component({
  selector: 'app-password-list',
  standalone: true,
  imports: [
    NgbDropdownModule,
    ReactiveFormsModule,
    CommonModule,
    AddPasswordComponent
  ],
  templateUrl: './password-list.component.html',
  styleUrl: './password-list.component.scss'
})
export class PasswordListComponent {

  private modalService = inject(NgbModal)
  
    PasswordsList: Password[] = [
        {Id:1, EncryptedValue: "Azerty123"},
        {Id:2, EncryptedValue: "Azerty123"},
        {Id:3, EncryptedValue: "Azerty123"},
      ];
  
  
      openLg(content: TemplateRef<any>) {
        this.modalService.open(content, { size: 'lg' });
      }

      addPassword(password: Password) {
        
      }
}
