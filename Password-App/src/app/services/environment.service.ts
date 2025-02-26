import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  apiUrl: string = 'http://localhost:7213/api';

  private readonly apiKey: string = "";

  constructor() { }

  Headers(): HttpHeaders {
    return new HttpHeaders({
      'apiKey': this.apiKey
    })
  }
}
