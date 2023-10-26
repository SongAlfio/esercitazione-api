import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'API_Pokemon';
  Pokemon_list: any[]=[];
  Poke_Obs!:Observable<any>;
  data!: any;

  constructor(public http: HttpClient){

  };

  ngOnInit(): void {
    this.Poke_Obs = this.http.get("https://pokeapi.co/api/v2/type");
    this.Poke_Obs.subscribe(this.Receive_Pokemon, this.getPokemon);
  };
  
  Receive_Pokemon = (data: any) => {
    this.data = data;
  };

  getPokemon = (ID: any) =>
  {
    this.data = ID;
    let pokemonID = this.http.get(ID,"/:id"); //Ottengo l'id dalla ParamMap
    console.log (pokemonID); //Stampo su console
    //this.service.getTrack() 

  }
}
