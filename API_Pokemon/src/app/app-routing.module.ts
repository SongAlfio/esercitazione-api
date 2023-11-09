import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonIdComponent } from "./pokemon-id/pokemon-id.component";
import { DetailComponent } from "./detail/detail.component";


const routes: Routes = [
    {path: 'Pokemon/:Id', component: PokemonIdComponent},
    {path: 'detail/:Id', component: DetailComponent}

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }