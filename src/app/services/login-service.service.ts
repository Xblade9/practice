import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from '../classes/login';
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(payload: Ilogin): Observable<Ilogin> {
    console.log(payload)
    return this.http.post<Ilogin>(`${environment.apiurl}/login`, payload);
  }
}
