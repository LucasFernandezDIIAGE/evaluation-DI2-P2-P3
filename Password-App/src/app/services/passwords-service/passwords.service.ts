import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment.service';
import { map, Observable } from 'rxjs';
import { Password } from '../../models/passwords/password';

@Injectable({
  providedIn: 'root',
})
export class PasswordsService {

  constructor(
    private http: HttpClient,
    private environmentsService: EnvironmentService
  ) {}

  getPasswords() {
    const apiUrl = this.environmentsService.apiUrl;

    return this.http.get<any[]>(`${apiUrl}/passwords`).pipe(
      map((data) =>
        data.map(
          (password) =>
            new Password(
              password.Id,
              password.EncryptedValue
            )
        )
      )
    );
  }

  addPassword(password: Password): Observable<Password> {
    const apiUrl = this.environmentsService.apiUrl;

    return this.http.post<Password>(`${apiUrl}/passwords`, password);
  }

}
