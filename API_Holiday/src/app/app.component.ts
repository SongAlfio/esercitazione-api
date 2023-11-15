import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API_Holiday';
  Poke_Obs!:Observable<any>;
  data!: any;

  constructor(public http: HttpClient){

  };

  ngOnInit(): void {
    this.Poke_Obs = this.http.get("https://calendarific.com/api/v2/holidays?api_key=REw1dz8vOjrYiC3iyN4TmJtVEfil1Kty&country=IT&year=2023");
    this.Poke_Obs.subscribe(this.Receive_Pokemon);

  };
  
  Receive_Pokemon = (data: any) => {
    this.data = data;
  };
}
