import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private http: HttpClient) { }

  searchDay(country: string, year: number) {
    const url = `https://calendarific.com/api/v2/holidays?country=${country}&year=${year}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer REw1dz8vOjrYiC3iyN4TmJtVEfil1Kty'
    });

    let obsDay = this.http.get(url, { headers });
    return obsDay;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
