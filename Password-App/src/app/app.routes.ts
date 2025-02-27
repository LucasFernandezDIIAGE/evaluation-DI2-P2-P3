import { Routes } from '@angular/router';
import { AddPasswordComponent } from './components/add-password/add-password.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { PasswordListComponent } from './components/password-list/password-list.component';

export const routes: Routes = [
    { path: '', component: ApplicationListComponent },
    { path: 'applications', component: ApplicationListComponent },
    { path: 'passwords', component: PasswordListComponent },
    { path: 'passwords/:appId', component: PasswordListComponent },

];
