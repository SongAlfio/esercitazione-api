import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonIdComponent } from "./pokemon-id/pokemon-id.component";
import { DetailComponent } from "./detail/detail.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";


const routes: Routes = [
    {path: '', component: PokemonListComponent},
    {path: 'Type/:Id', component: PokemonIdComponent},
    {path: 'Type/:Id/Pokemon/:Id', component: DetailComponent}

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }