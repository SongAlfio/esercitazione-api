import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API_Pokemon2';
  Obs_Pokemon!: Observable<any>;
  data!:any;

  constructor(public http: HttpClient){
    
  }

  ngOnInit(): void{
    this.Obs_Pokemon = this.http.get('https://pokeapi.co/api/v2/type')
    this.Obs_Pokemon.subscribe(this.Receive_Pokemon)
    console.log(this.Obs_Pokemon)
  }
  Receive_Pokemon=(data:any)=>{
    this.data=data
  }
  
}
