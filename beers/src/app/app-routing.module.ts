import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchBirreComponent } from './search-birre/search-birre.component';
import { ItemBirreComponent } from './item-birre/item-birre.component';


const routes: Routes = [             
  {path: 'search', component: SearchBirreComponent},         
  {path: 'search/:id', component: ItemBirreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
