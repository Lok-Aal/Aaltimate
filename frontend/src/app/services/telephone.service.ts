import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TelephoneNumber } from 'src/types/TelephoneNumber';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class TelephoneService {

  constructor(private httpClient : HttpClient) { 

  }

  parseNumber(number : string) : Observable<TelephoneNumber>{



    return this.httpClient.get<TelephoneNumber>(`${environment.backendUrl}${environment.endpoints.telephone}`, {params: {number: number}});

  }


   
}
