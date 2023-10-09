import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../classes/register';
import { environment } from 'src/environments/environment.dev';
@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    register(payload: Register): Observable<Register> {
        return this.http.post<Register>(`${environment.apiurl}/register`, payload);
    }
}