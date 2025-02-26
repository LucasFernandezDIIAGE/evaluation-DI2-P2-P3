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
        {password_id:1, password_value: "Azerty123"},
        {password_id:2, password_value: "Azerty123"},
        {password_id:3, password_value: "Azerty123"},
      ];
  
  
      openLg(content: TemplateRef<any>) {
        this.modalService.open(content, { size: 'lg' });
      }
}
