import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import url from '../constants/url';
import User from '../models/user';
import Report from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  login(email: string, password: string): Observable<User> {
    const result = this.http.post<User>(`${url}/api/login`, { email, password });
    return result;
  }

  getReports(): Observable<Report[]> {
    const reports = this.http.get<Report[]>(`${url}/api/userassessments`);
    return reports;
  }

}
