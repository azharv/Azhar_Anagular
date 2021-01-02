import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Reporting } from './reporting';


@Injectable({ providedIn: 'root' })


export class ReportingService {

  constructor(
    private http: HttpClient,
    
  ) { }

  private Url = 'https://localhost:44318/UserPostReporting/GetUserPostReporting';

  
  getReportings(): Observable<Reporting[]> {
    return this.http.get<Reporting[]>(this.Url)
    
  }
 
}