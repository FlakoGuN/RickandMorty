import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  { path: '',
  redirectTo: 'home',
   pathMatch: 'full'
  },

  { path: 'home', component: HomeComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'character-detail/:id', component: CharacterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
