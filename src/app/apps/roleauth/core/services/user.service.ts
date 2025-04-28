import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';

import url from '../constants/url';
import User from '../models/user';
import Report from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${url}/api/login`, { email, password }).pipe(
      tap(user => {
        if(user?.token) {
          console.log('user', user);
          localStorage.setItem('userToken', user.token);
        }
      })
    );
  }

  getReports(): Observable<Report[]> {
    const reports = this.http.get<Report[]>(`${url}/api/userassessments`);
    return reports;
  }

}
