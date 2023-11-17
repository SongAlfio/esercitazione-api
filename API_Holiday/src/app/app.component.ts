import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CalendarioService } from './calendario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API_Holiday';
  obsDay : Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca

  constructor(public Calendario : CalendarioService){
    this.obsDay = Calendario.searchDay("IT",2001);
    this.obsDay.subscribe((data)=>console.log(data)); //visualizzo la ricerca sulla console
  } 

  ngOnInit(): void {
  };
  

}
