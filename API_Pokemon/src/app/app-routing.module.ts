import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonIdComponent } from "./pokemon-id/pokemon-id.component";


const routes: Routes = [
    {path: 'Pokemon/:Id', component: PokemonIdComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }