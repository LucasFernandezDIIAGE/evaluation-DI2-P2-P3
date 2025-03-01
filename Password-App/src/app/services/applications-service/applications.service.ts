import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment.service';
import { map } from 'rxjs';
import { Application } from '../../models/applications/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(
    private http: HttpClient,
    private environmentsService: EnvironmentService,
  ) { }

  getApplications(){    
    const apiUrl = this.environmentsService.apiUrl;

    return this.http.get<any[]>(`${apiUrl}/applications`).pipe(
      map(data => data.map(application => new Application(
        application.id,
        application.name,
        application.type
      ))
      )
    )
  }

  getApplicationById(id: number){
    const apiUrl = this.environmentsService.apiUrl;

    return this.http.get<any>(`${apiUrl}/applications/${id}`).pipe(
      map(application => new Application(
        application.id,
        application.name,
        application.type
      )
      )
    )
  }

  addApplication(application: Application){
    const apiUrl = this.environmentsService.apiUrl;

    return this.http.post(`${apiUrl}/applications`, application);
  }
  
}
