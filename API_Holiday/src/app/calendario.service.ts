import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private http: HttpClient) { }

  searchDay(country: string, year: number) {
    const url = `https://calendarific.com/api/v2/holidays?api_key=REw1dz8vOjrYiC3iyN4TmJtVEfil1Kty&country=${country}&year=${year}`;


    let obsDay = this.http.get(url);
    return obsDay;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
