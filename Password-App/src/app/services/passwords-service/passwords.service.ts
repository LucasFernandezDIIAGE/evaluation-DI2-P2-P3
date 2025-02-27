import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment.service';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import { Password } from '../../models/passwords/password';
import { ApplicationsService } from '../applications-service/applications.service';

@Injectable({
  providedIn: 'root',
})
export class PasswordsService {

  constructor(
    private http: HttpClient,
    private environmentsService: EnvironmentService,
    private applicationsService: ApplicationsService
  ) {}

  getPasswords(): Observable<Password[]> {
    const apiUrl = this.environmentsService.apiUrl;
    const headers = { 'ApiKey': '2BE5A87E663CE9148523EC7B5239F!' };

    return this.http.get<any[]>(`${apiUrl}/passwords`, { headers }).pipe(
        mergeMap(passwords => {
            const enrichedPasswords$ = passwords.map(password =>
                this.applicationsService.getApplicationById(password.applicationId).pipe(
                    map(application => new Password(
                        password.id,
                        password.encryptedValue,
                        password.accountName,
                        password.applicationId,
                        application
                    ))
                )
            );
            console.log(forkJoin(enrichedPasswords$));
            return forkJoin(enrichedPasswords$);
        })
    );
}

  addPassword(password: Password): Observable<Password> {
    const apiUrl = this.environmentsService.apiUrl;

    return this.http.post<Password>(`${apiUrl}/passwords`, password);
  }

  getPasswordsByApplicationId(applicationId: number): Observable<Password[]> {
    const apiUrl = this.environmentsService.apiUrl;
    const headers = { 'ApiKey': '2BE5A87E663CE9148523EC7B5239F!' };

    return this.http.get<any[]>(`${apiUrl}/passwords/${applicationId}`, { headers }).pipe(
        mergeMap(passwords => {
            const enrichedPasswords$ = passwords.map(password =>
                this.applicationsService.getApplicationById(password.applicationId).pipe(
                    map(application => new Password(
                        password.id,
                        password.encryptedValue,
                        password.accountName,
                        password.applicationId,
                        application
                    ))
                )
            );
            return forkJoin(enrichedPasswords$);
        })
    );
  }

}
