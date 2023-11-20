import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'API_HarryPotter';
  obs!: Observable<any>;
  data: any

  constructor(public http:HttpClient){
   
  }
  
  ngOnInit(): void {    
    this.obs = this.http.get('https://hp-api.onrender.com/api/characters')
    this.obs.subscribe(this.get_API)
  }

  
  get_API = (data: any) => {
    this.data = data;
  };
}


