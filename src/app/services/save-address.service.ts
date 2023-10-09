import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Address } from '../classes/address';
@Injectable({
  providedIn: 'root'
})
export class SaveAddressService {

  constructor(private http: HttpClient) { }

  saveAddress(payload: Address): Observable<Address> {
    return this.http.post<Address>(`${environment.apiurl}/address`, payload);
  }
}
