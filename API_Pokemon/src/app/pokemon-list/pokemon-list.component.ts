import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  title = 'API_Pokemon';
  Pokemon_list: any[]=[];
  Poke_Obs!:Observable<any>;
  data!: any;

  constructor(public http: HttpClient){

  };

  ngOnInit(): void {
    this.Poke_Obs = this.http.get("https://pokeapi.co/api/v2/type");
    this.Poke_Obs.subscribe(this.Receive_Pokemon);

  };
  
  Receive_Pokemon = (data: any) => {
    this.data = data;
  };

  spezza(url:string)
  {
    return url.split("/")[6]
  }
}
