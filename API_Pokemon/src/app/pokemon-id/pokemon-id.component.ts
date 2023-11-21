import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pokemon-id',
  templateUrl: './pokemon-id.component.html',
  styleUrls: ['./pokemon-id.component.css']
})
export class PokemonIdComponent {
  Id_Obs!:Observable<any>;
  Poke_Obs!:Observable<any>;
  data!: any;
  PokeData!:any


  constructor(private route: ActivatedRoute, public http: HttpClient) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('Id');
      console.log(id);

      this.Id_Obs = this.http.get("https://pokeapi.co/api/v2/type/"+id);
      this.Id_Obs.subscribe(this.Receive_Id);

    });
  }


  Receive_Id = (data: any) => {
    this.data = data;
    console.log(data)
  };



  spezza_Url(url:string)
  {
    console.log(url)
    return url.split("/")[6]
  }
}
