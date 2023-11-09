import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonIdComponent } from './pokemon-id/pokemon-id.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonIdComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
